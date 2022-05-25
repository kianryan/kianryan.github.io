---
layout: post
title: Twitch Authentication With Python
thumbnail-img: /assets/images/2022/05/24/perty_bot.png
categories: Coding
tags: 
  - twitch
  - python
  - oauth
  - raspberrypi
---

I'm writing a Twitch bot on a Raspberry Pi with Python 3.  The bot uses the
[Twitch IRC interface](https://dev.twitch.tv/docs/irc#) interface to read and send and messages.  To communicate with any of Twitches APIs, including the IRC 
interface, an access token is required from their [OAuth server](https://dev.twitch.tv/docs/irc/authenticate-bot).  The Twitch API is *well* documented, and 
there are excellent examples available in [Node](https://github.com/twitchdev/authentication-node-sample) and 
[Go](https://github.com/twitchdev/authentication-go-sample).  This is an example implementation using Python 3.

![Perty Bot](/assets/images/2022/05/24/perty_bot.png)

>  __Disclaimer__: This is not production ready code, and is provided as a working example only.  My Python is limited 
>  to building Raspberry Pi gadgets, so I apologise for any offence in coding style I'm about to commit.  I'm open 
> to discussion and comments.

All code samples are ultimately from [twitch_auth.py](https://github.com/OrangeT/perty/blob/main/twitch_auth.py) in [PertyBot](https://github.com/OrangeT/perty/), a physical computing Twitch bot in 
development.

# Registration on Twitch Developers


![Twitch Developer Registration Form](/assets/images/2022/05/24/twitch_dev_reg.png)

You'll need to register an application with [Twitch Developers](dev.twitch.tv), to obtain a 
__client_id__ and __client_secret__.  When storing these with your application, please treat them 
as secret and try to not to commit them with your codebase.  [Take a look at a .gitignore file.](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/#:~:text=gitignore%20file%20is%20a%20text,all%20of%20your%20Git%20repositories.)

# Overview of Authorization Code Flow

The [authorization code flow](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) passes an authorization code from Twitch to our application.  This code can then be redeemed 
for an access and renewal token, which we can use to access Twitch's APIs.  There's a few steps we need to go through:

* "Get" the authorization token from Twitch
* Exchange the authorization token from an access token
* (Periodically) check the access token is still valid, if it's no longer valid, renew.

# "Get" the authorization token from Twitch

"Get" is a lie.  We don't "Get" anything.  The user in the browser does the work here, and then Twitch "gives" us the authorization code back.
We're going to host a small web server, host a web page with a link to the authorization url that contains all the 
required properties and then prompt the user to open their browser.  When the authorization with Twitch is complete, we handle 
the response from Twitch and store the code.

Scopes defines the permissions we're seeking for our application.  In this case, we're looking for read and write chat permissions, so we're only requesting chat:edit and chat:read.  [Request the scopes you need for your application permissions.](https://dev.twitch.tv/docs/authentication/scopes)


```python

from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs, urlunparse, urlencode
import ssl

host = 'localhost'
port = 3000
redirect_uri = f'https://{host}:{port}/'

code = None

class HandleRequests(BaseHTTPRequestHandler):

    keep_running = True

    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        global code

        self._set_headers()

        path = urlparse(self.path)

        if not path.query:
            # If there's no auth code, keep serving the web page.
            request_payload = { 
                    "client_id": client_id,
                    "force_verify": 'false',
                    "redirect_uri": redirect_uri,
                    "response_type": 'code',
                    "scope": 'chat:edit chat:read'
                    }
            encoded_payload = urlencode(request_payload)
            url = 'https://id.twitch.tv/oauth2/authorize?' + encoded_payload
            self.wfile.write(f'<html><head><body><a href="{url}">Click here to auth with Twitch</a></body></head>'.encode('utf-8'))
        else:
            # If Twitch has provided a code, store it and stop the web server.
            code = parse_qs(path.query)['code'][0]
            print(f'Code: {code}')
            HandleRequests.keep_running = False

 # Authorisation Code Flow
# Launch HTTP Server, listen for request, direct user to Twitch,
# listen for response.
def auth_code_flow():

    httpd = HTTPServer((host, port), HandleRequests)
    httpd.socket = ssl.wrap_socket (httpd.socket, 
        keyfile="key.pem", 
        certfile='cert.pem', server_side=True)

    print(f'Please open your browser at {redirect_uri}')

    # Keep listening until we handle a post request
    while HandleRequests.keep_running:
         httpd.handle_request()   

```

To run this, you'll need a local certificate, you can generate this from the shell with openssl:

```shell
 openssl req -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out cert.pem -keyout key.pem
```

On running the script and opening the browser, the user should see the link to Twitch, followed by the Twitch authorization process 
and then a blank page. The authorization code has been handled by our application, and our web server 
terminated.

![User viewing the browser link](/assets/images/2022/05/24/perty_host.png)
![User authorizing with Twitch](/assets/images/2022/05/24/perty_twitch.png)

# Exchange the authorization token for an access token

The authorization token is only good for one thing - getting the access token.  So, we make a request to exchange our tokens.  
If our request is successful, then we store our access and refresh tokens.  Otherwise, we dump the response and let the user deal with it.


```python

access_token = None
refresh_token = None

def get_tokens():
    print("Fetching Twitch tokens")
    global access_token
    global refresh_token

    url = 'https://id.twitch.tv/oauth2/token'
    request_payload = {
        "client_id": client_id,
        "client_secret": client_secret,
        "grant_type": 'authorization_code',
        "code": code
        'redirect_uri': redirect_uri
    }

    r = requests.post(url, data=request_payload).json()
    try:
        access_token = r['access_token']
        refresh_token = r['refresh_token']
        print(f'Access token: {access_token}')
        print(f'Refresh token: {refresh_token}')
    except:
        print("Unexpected response on redeeming auth code:")
        print(r)
```

At this point, we should have an access token that we can use to auth our application with Twitch - here's a quick example connecting to Twitch IRC:

``` python
import socket
sock = socket.socket()

sock.connect(('irc.chat.twitch.tv', 6667))
 
sock.send(f"PASS oauth:{access_token}\n".encode('utf-8'))
sock.send(f"NICK twitchname\n".encode('utf-8'))
sock.send(f"JOIN #mypopulartwitchchannel\n".encode('utf-8'))
```

![Perty using an access token to connect to IRC](/assets/images/2022/05/24/perty_connected.png)

# Validating The Access Token

The access token is only valid for a given period of time in the expires_in property.  [However, the token can be expired for any number of reasons](https://dev.twitch.tv/docs/authentication/validate-tokens), so Twitch recommend that tokens are validated before use.

Twitch provides an endpoint for validating tokens.  Pass the token in an authentication header to the endpoint, 
and the status code reflects the token condition.  200 - OK, 401 - invalid and requires renewal.

__Important__ - Twitch also requires that you *check* the validity of your token *hourly*, regardless of expiration time, and if validation 
fails, force the application to acquire a new access token.  Twitch will block your application if it can not detect 
this behaviour on audit.

```python
def validate():
    print("Validating Twitch tokens...", end='')
    url = 'https://id.twitch.tv/oauth2/validate'
    r = requests.get(url, headers={'Authorization': f'Oauth {access_token}'})
    if r.status_code == 200:
        print("valid")
        return True
    elif r.status_code == 401:
        print("invalid")
        return False
    else:
        raise Exception(f'Unrecognised status code on validate {r.status_code}')
```

# Refresh the Access Token

If the access token is expired, it will need to be refreshed.  We can adapt our get_tokens()
method to handle the original authorization code exchange, or the refresh_token exchange:

```python
def get_tokens():
    print("Fetching Twitch tokens")
    global access_token
    global refresh_token

    url = 'https://id.twitch.tv/oauth2/token'
    request_payload = {
        "client_id": client_id,
        "client_secret": client_secret,
        'redirect_uri': redirect_uri
    }
    if code:
        request_payload['grant_type'] = 'authorization_code'
        request_payload['code'] = code
    elif refresh_token:
        request_payload['grant_type'] = 'refresh_token'
        request_payload['refresh_token'] = refresh_token
    else:
      raise Exception('No code or refresh_token to exchange')

    r = requests.post(url, data=request_payload).json()
    try:
        access_token = r['access_token']
        refresh_token = r['refresh_token']
        print(f'Access token: {access_token}')
        print(f'Refresh token: {refresh_token}')
    except:
        print("Unexpected response on redeeming auth code:")
        print(r)

```

# All together

Putting it together we can write a handler that will handle our entire authorization code 
flow:

```python
def oauth():
    if read_code(): # read access_token and refresh_token from config
        if not validate():  # is access token valid?
            get_tokens()    # refresh access token
    else:
        auth_code_flow() # interactive auth code flow
        get_tokens() # exchange auth token for access token
    write_code() # write access_token and refresh_token to config

    return access_token # return access token back to application
```

The user will only be promoted to authorize with Twitch if they are needed to do 
so, otherwise we will use the existing access token, or refresh the token first.

---
layout: post
title: Remote Development on Windows using Visual Studio Code and OpenSSH
thumbnail-img: /assets/images/2021/04/28/vscode-omnisharp.png
categories: Code
tags:
 - code
 - openssh
 - vscode
---

Whilst under lockdown, I moved development of .NET projects from my ultrabook to a rather large desktop.

The extra horsepower has been appreciated, especially for large monolithic .NET Framework projects that are 
resource intensive.

Coming out of lockdown, I don't want to sacrifice the horsepower the large machine provides, but I do want to 
gain some freedom from the desk again for a few days a week; working from the garden, or heaven forbid, maybe 
eventually a coffee shop.

[Visual Studio Code supports development using Remote SSH](https://code.visualstudio.com/docs/remote/ssh), 
including support for extensions such as [Omnisharp](http://www.omnisharp.net/).  This is my preferred development platform 
for most of my .NET development, including Core and Framework.

The magic component to make this work on Windows platforms is OpenSSH, the standard SSH client/server library for Unix like 
operating systems.  OpenSSH has been available on Windows 10 and Windows Server 2019 since 2019.

The steps required to make this work on Windows are:

1.  [Enable OpenSSH server on your host system](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse#install-openssh-using-powershell) (the machine you want to connect to).
2.  [Enable OpenSSH client on your client system](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse#install-openssh-using-powershell) (the machine you want to connect from).
3.  Optional, but __highly__ recommended: [Set up a private/public key on your client, and add to the authorized_keys on your host.](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement)
4.  There's an issue with permissions on authorized_keys.  [See here on how to resolve.](https://stackoverflow.com/questions/16212816/setting-up-openssh-for-windows-using-public-key-authentication)

I strongly recommend at this point you're using [Windows Terminal](https://github.com/microsoft/terminal).

With the above completed, opening a Powershell session, and entering the following should open a connection to your remote host and display
a command prompt.  If you've not set up authorized_keys from above, you will be required to enter a password:

```
ssh username@host
```

If you would rather set up your default remote shell for Powershell 7, run the following in an elevated Powershell session on the host:

```
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "C:\Program Files\PowerShell\7\pwsh.exe" -PropertyType String -Force
```

Now we can connect to the host from Visual Studio Code:

1. From Visual Studio Code, install the [Remote SSH extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh).
2. Ctrl-P to open the command palette and enter: "Remote-SSH: Connect to Host...".
3. Add your username and host, as you did for the ssh connection before, and VS Code should first connect, and then install the remote agent on to the host.  
    
    ![VS Code connecting over SSH](/assets/images/2021/04/28/vscode-ssh.png)
    
4. You'll notice that "Open Folder" doesn't present with the regular windows folder browser - you're operating on a remote file system.
target folder and open.  

    ![VS Code browse folder](/assets/images/2021/04/28/vscode-openfolder.png)

5. You may need to reinstall or enable some of your extensions on your target system, in this case Omnisharp comes straight to life and is happy 
to report that my code contains unreachable code.  Build and task commands run on the host, and opening the integrated terminal opens the terminal on
the host, allowing me direct access.  

    ![VS Code omnisharp](/assets/images/2021/04/28/vscode-omnisharp.png)
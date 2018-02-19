---
id: 48
title: 'The Venerable &#8220;if&#8221; Statement'
date: 2008-11-28T20:12:43+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2008/11/the-venerable-if-statement/
permalink: /2008/11/the-venerable-if-statement/
ljID:
  - "95"
ljxp_comments:
  - "0"
ljxp_privacy:
  - "0"
dsq_thread_id:
  - "1599531170"
categories:
  - Code
---
It&#8217;s one of the first keywords every programmer is taught, and it&#8217;s the first real sense of control you&#8217;re given over your programming. It&#8217;s translated into almost every language (there is the odd exception, and they are odd) and makes the basis for every conditional statement there-in.

Yes, we&#8217;re talking about the &#8220;if&#8221; statement. Everybody is familiar with its structure &#8211; if condition x is satisfied do this, or else do that, where this and that can be as flexible as you like. Alternatives exist, although most programmers seem to learn to &#8220;switch&#8221; and stop there. Because all their use cases can be covered with the &#8220;if&#8221; statement, programmers can become dependant on the &#8220;if&#8221; statement to perform functions that are better suited by other operators or keywords.

Why make the effort? This boils down to maintainability and readability. By using the most appropriate method to define your &#8220;if&#8221;, you _explicitly_ state your intended purpose. When the next programmer comes along to maintain your code, or if you revisit your code after a significant time (say a week) the meaning of the statement is inherently obvious and rather than wasting time attempting to understand the complexities of the &#8220;if&#8221; blocks, you can concentrate on more important things. This is always a good thing. There may be some performance benefits (or occasionally losses) to some of these methods, but for the moment we are focusing on maintainability and readability of your code.

<!--more-->

## switch

Switch is usually the second conditional statement programmers are taught, and they are often taught it badly. Switch should be used when multiple actions can happen based upon the value of a variable at a given moment in time. For example, case would be appropriate if you were watching for keywords, or waiting for specific resistance values. The switch statement in C# is somewhat different from the switch statement in C and other languages in that it does not allow fall through to the next statement, the programmer must state what happens at the end of every block whether this is breaking or a goto to execute another path. This gives us a rather nice mechanism for a state machine, but that&#8217;s for another day.

A quick example:

<pre class="brush: csharp; title: ; notranslate" title="">public int doSomeMaths(int val)
{
int returnVal = 0;
switch(val)
{
case 1:
returnVal = 2;
break;
case 2:
returnVal = 2;
goto 3;
case 3:
returnVal = returnVal + 3;
break;
default:
returnVal = 5;
break;
}
return returnVal;
}
</pre>

Nothing too magic here, here we have a simple calculator that takes a number, applies a few rules and returns a second number. The important thing to note here is the legibility of the code, it is inherently obvious that the choice of action taken within the switch is directly dependant on the value of val. If we take this as a series of if statements we get the following code:

<pre class="brush: csharp; title: ; notranslate" title="">public int doSomeMaths(int val)
{
int returnVal = 0;
if (val == 1)
returnVal = 2;
else if (val == 2)
{
returnVal = 2;
returnVal = returnVal + 3;
}
else if (val == 3)
returnVal = 3;
else
returnVal = 5;&lt;/p&gt;

&lt;p&gt;return returnVal;
}
</pre>

Try parsing this with your eyes. Note that rather than concentrating on the actions of the blocks, you are splitting your concentration between the conditions of the if statements and the blocks they execute. This is how the next guy (or gal) feels when they have to maintain your code. Our first version is explicit in meaning, reads well and is easy to maintain. When a programmer sees the switch statement, they know that the value in the brackets is the pivot to determine the code path execution.

## Conditional Operator &#8211; ?:

This one is a personal favourite of mine, although recently superseded by the one below. How many times have you written the following?

<pre class="brush: csharp; title: ; notranslate" title="">public int doSomeMoreMaths(int val)
{
int returnVal = 0;
if (val == 1)
returnVal = 1;
else
returnVal = 2;&lt;/p&gt;

&lt;p&gt;return returnVal;
}
</pre>

For such a trivial example, it&#8217;s obvious what this does, but again the eyes need to take in quite a lot of information to determine that our return value is 1 if our input is 1 or 2 otherwise. We can express this using the ?: operator, which will give us the following function:

<pre class="brush: csharp; title: ; notranslate" title="">&lt;/dt&gt;
&lt;dt&gt;public int doSomeMoreMaths(int val)&lt;/dt&gt;
&lt;dt&gt;{&lt;/dt&gt;
&lt;dt&gt;int returnVal = (val == 1)&lt;/dt&gt;
&lt;dt&gt;? 1&lt;/dt&gt;
&lt;dd&gt;2;
return returnVal;
}
</pre></dd> </dl> 

or the one liner:

<pre class="brush: csharp; title: ; notranslate" title="">public int doSomeMoreMaths(int val)
{
int returnVal = (val == 1) ? 1 : 2;
return returnVal;
}
</pre>

This method does require some knowledge of the syntax, but it&#8217;s knowledge worth acquiring. The operator is an assignment and reads as _condition ? if true return this : if false return that_. In our example above our condition is &#8220;does val equal 1&#8221;, if true then assign returnVal the value 1, otherwise assign the value 2. The first few times you see this it may look somewhat unnatural, but by removing some of the syntactic fluff from our first example, we get a statement that&#8217;s easier to parse if we introduce some complexity.

From MSDN: 

<pre class="brush: csharp; title: ; notranslate" title="">public static double sinc(double x)
{
return x != 0.0 ? Math.Sin(x)/x : 1.0;
}
</pre>

## Null-coalescing Operator &#8211; ??

Yes, that is quite a mouthful. For quite a while I was using the above operator to perform jobs such as:

<pre class="brush: csharp; title: ; notranslate" title="">&lt;/dt&gt;
&lt;dt&gt;public int ashamed(int? val)&lt;/dt&gt;
&lt;dt&gt;{&lt;/dt&gt;
&lt;dt&gt;int returnVal = (val != null)&lt;/dt&gt;
&lt;dt&gt;? val.Value                 // Or whatever the parsed value is...&lt;/dt&gt;
&lt;dd&gt;1;                        // Default value.
return returnVal;
}
</pre></dd> </dl> 

This is still a hell of a lot better than our if statements from before, and is pretty clear that we&#8217;re testing for a null value; if not null then use the value, otherwise use a default of 1. I have recently discovered that C# 2 also came with another operator, ??. ?? is defined as:

The ?? operator returns the left-hand operand if it is not null, or else it returns the right operand.

This removes the need entirely for the null test. Our function now becomes:

<pre class="brush: csharp; title: ; notranslate" title="">public int notSoAshamed(int? val)
{
int returnVal = val ?? 1;
return returnVal;
}
</pre>

Again as with ?:, this requires some previous knowledge of the syntax, but the timesaving potential for both the developer and maintainer is huge. A good example to demonstrate this is when handling Request parameters from the url string of a GET web request. I still read code such as the following:

<pre class="brush: csharp; title: ; notranslate" title="">public int getValue(HttpContext context)
{
int returnValue;
if (context.Request.Params["id"] != null)
returnValue = int.Parse(context.Request.Params["id"]);
else
returnValue = 1;&lt;/p&gt;

&lt;p&gt;return returnValue;
}
</pre>

What a mouthful. After ten seconds parsing, we realise that all we&#8217;re doing is returning the int &#8220;id&#8221; passed from the url. Our first attempt at a rewrite would probably get us:

<pre class="brush: csharp; title: ; notranslate" title="">&lt;/dt&gt;
&lt;dt&gt;public int getValue(HttpContext context)&lt;/dt&gt;
&lt;dt&gt;{&lt;/dt&gt;
&lt;dt&gt;int returnValue = (context.Request.Params["id"] != null)&lt;/dt&gt;
&lt;dt&gt;? int.Parse(context.Request.Params["id"])&lt;/dt&gt;
&lt;dd&gt;1;&lt;/dd&gt;
&lt;/dl&gt;

&lt;p&gt;return returnValue;
}
</pre></p> 

from which we can quickly tell that we&#8217;re testing &#8220;id&#8221;, if it&#8217;s not null, then return the parsed integer, otherwise return 1. We can potentially simplify this further with the following:

<pre class="brush: csharp; title: ; notranslate" title="">public int getValue(HttpContext context)
{
int returnValue = int.Parse(context.Request.Params["id"] ?? "1");
}
</pre>

Again, this is easy to parse visually, although some would argue that the overhead of running int.Parse against the string &#8220;1&#8221; was unnecessary. In this case the question needs to be asked, which is more important: speed or clarity?

## Booleans, > < ==, etc

To some people, this will be obvious. To others this will be either a moment of clarity, or a moment for their heads to meet their desks. Boolean operators return a value, which is either true or false. We have been using these operators throughout this article as conditions to execute blocks of code, or perform assignments, but if the values we want are boolean in nature, then we need no extra code. I still see code written by other programmers (and occasionally myself) which looks like:

<pre class="brush: csharp; title: ; notranslate" title="">public bool greaterThan(int x, int y)
{
bool returnValue;
if (x &gt; y)
returnValue = true;
else
returnValue = false;
return returnValue;
}
</pre>

Rather obviously, this can be reduced to:

<pre class="brush: csharp; title: ; notranslate" title="">public bool greaterThan(int x, int y)
{
bool returnValue = x &gt; y;
return returnValue;
}
</pre>

## Unit Testing

Unit testing gives you a process by which to &#8220;black box&#8221; test your functions by writing assertions to ensure they behave the way you expect them to. There is a very important case for unit testing in respect of this article, and that is in the context of refactoring. Refactoring is where we take existing code, and rewrite it to increase performance, legibility or maintainability. Unit testing allows us to define a series of behaviours for our function before we rewrite chunks of it so that we can guarantee that we don&#8217;t effect the expected outcomes of the method when we start chopping and changing.

When modifying existing code one of the overriding questions that should be in the front of your mind should be, &#8220;if I change from this series of if blocks to this ?: operator, will my code still behave the same way it did before?&#8221;. One method of guaranteeing that functionality is to write unit tests for your methods _before_ refactoring the code. It is important to ensure that your tests are comprehensive and cover the range of possible input options, thus some intimate knowledge of the method to be refactored is helpful here. Once your assertions are proven true, refactor your code and test again. If your assertions are still true, you can be reasonably confident that your behaviour has remained the same.

There are other resources that cover this in more detail (google is your friend) and I may write a more detailed post on unit testing and refactoring if there&#8217;s some interest.

Enjoy your new outlook on &#8220;if&#8221;s.

## Further Reading

http://msdn.microsoft.com/en-us/library/ms173224.aspx http://msdn.microsoft.com/en-us/library/ty67wk28(VS.71).aspx
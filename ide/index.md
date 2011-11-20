---
layout: default
title: Scala+GWT in Eclipse
---

Scala+GWT in Eclipse
====================

This page provides instructions for setting up Scala+GWT integration with Eclipse. Essentially, the idea is to make [GPE plugin](http://code.google.com/eclipse/) and [Scala plugin](http://www.scala-ide.org/) work together with our forked verions of GWT and Scala compilers.

**NOTE**: These instructions should be considered more as preview of what's coming than anything final. In particular, setting up Eclipse is quite involved and fragile due to small issues with tools we are using. Hopefully, in a couple of weeks this page will shrink in size.

Eclipse
-------

Since everything you are installing is still in experimental state you should use separate, clean installation of Eclipse. It's recommended that you download [Eclipse classic](http://www.eclipse.org/downloads/).

GPE plugin
----------

Install GPE plugin by following instructions from [here](http://code.google.com/eclipse/). You just need to install GPE plugin itself and can skip the rest of plugins like designer, sdk and android stuff.

Scala plugin
------------

We have custom build of Scala plugin for Eclipse. Install it from this update site: http://dl.dropbox.com/u/12870350/scalagwt/eclipse/0.1-M3/site

Import samples
--------------

Download 0.1-M3 version of samples from here: https://github.com/downloads/scalagwt/scalagwt-sample/scalagwt-sample-0.1-M3.zip

Import them to fresh Eclipse workspace as an existing project.

**NOTE**: Due to [#1000695](http://www.assembla.com/spaces/scala-ide/tickets/1000695) bug you need to manually fix path in Xplugin setting
of Scala compiler. Go to project's properties, choose Scala compiler and in advance tab you should see empty Xplugin setting. Provide **absolute** path to `factorymanifests.jar` located in `scalagwt-sample/lib/scala` directory.

Once you are done with `Xplugin` setting your project should rebuild successfully.

Running a sample in development mode
------------------------------------

Go to `Run > Run configurations`. Under `Web application` category you should see following items listed:

  * Gwtdlx.html
  * Hello.html
  * Mnemonics.html
  * Showcase.html
  
Those are configurations that allow you to run various samples. It's recommended to start with Hello.html as it's very small sample. Once you run it you should see address you should open in a browser (Chrome or Firefox is required). It should look like this one: http://127.0.0.1:8888/Hello.html?gwt.codesvr=127.0.0.1:9997.

After opening it in a browser it takes a while to finish loading. After that, you should be able to click on a button and see the message.

For inspiration what you can do check out this video: http://www.youtube.com/watch?v=w1nluQmkE8g

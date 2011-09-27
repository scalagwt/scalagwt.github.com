---
layout: default
title: Scala+GWT hackers' guide
---

Scala+GWT hackers' guide
========================

Git repos
---------

Scala+GWT project consists of a few git repositories:

  * [scalagwt-scala](http://github.com/scalagwt/scalagwt-scala) is a fork of Scala compiler repository that adds jribble backend and contains build script for `scala-library-gwt.jar`
  * [scalagwt-gwt](http://github.com/scalagwt/scalagwt-gwt) is a fork of GWT repository where we add support for jribble
  * [scalagwt-sample](http://github.com/scalagwt/scalagwt-sample) is the repository where all samples are stored
  
If you want to hack on any of those repos just fork them on Github. Once you have something ready for review just issue a pull request and we'll look into that.

Building
--------
  
### Building scalagwt-scala

Building scalagwt-scala is quite involved at the moment because this project depends on some GWT libs. Exact instructions are:

  1. Download [gwtJavaEmul.zip](http://dl.dropbox.com/u/12870350/scalagwt/gwtJavaEmul.zip) and unpack it into root directory of the project.
  2. Create `build.properties` file in root directory with just one line: `gwt.classpath=gwtJavaEmul/lib/gwt-lang.jar:gwtJavaEmul/lib/gwt-java_lang.jar:gwtJavaEmul/lib/gwt-user.jar`.
  3. Type `ant`. Builds takes several minutes to complete.
  
### Building scalagwt-gwt

Building GWT repo is much easier. Just type `ant dist-dev`. You need to have gwt tools set up, check [gwt documentation](http://code.google.com/webtoolkit/makinggwtbetter.html#compiling).

### Building scalagwt-sample

You need to execute following commands:

    mkdir -p lib/gwt
    cp $SCALAGWT_GWT/build/lib/gwt-dev.jar lib/gwt/
    cp $SCALAGWT_GWT/build/lib/gwt-user.jar lib/gwt/
    cp $SCALAGWT_GWT/build/lib/gwt-servlet.jar lib/gwt/
    cp $SCALAGWT_GWT/build/lib/gwt-servlet-deps.jar lib/gwt/
    cp $GWT_TOOLS/lib/javax/validation/validation-api-1.0.0.GA-sources.jar lib/gwt

    mkdir -p lib/scala
    cp $SCALAGWT_SCALA/build/pack/lib/scala-compiler.jar lib/scala/
    cp $SCALAGWT_SCALA/build/pack/lib/scala-library.jar lib/scala/
    cp $SCALAGWT_SCALA/build/pack/lib/scala-library-gwt.jar lib/scala/
    cp $SCALAGWT_SCALA/build/pack/lib/protobuf-java-2.4.1.jar lib/scala/ lib/scala/
    cp $SCALAGWT_SCALA/build/pack/misc/scala-devel/plugins/continuations.jar lib/scala/
    cp $SCALAGWT_SCALA/build/quick/misc/scala-devel/plugins/factorymanifests.jar lib/scala/
    
Assuming that `$SCALAGWT_GWT`, `$SCALAGWT_SCALA`, `$GWT_TOOLS` environment variables are set.

Then run `ant`.

Issues
------

Check what's happening in the project by looking at issues on github:

  * [http://github.com/scalagwt/scalagwt-scala/issues](http://github.com/scalagwt/scalagwt-scala/issues)
  * [http://github.com/scalagwt/scalagwt-gwt/issues](http://github.com/scalagwt/scalagwt-gwt/issues)
  * [http://github.com/scalagwt/scalagwt-sample/issues](http://github.com/scalagwt/scalagwt-sample/issues)

Discussions
-----------

Join us here: [scalagwt@googlegroups.com](http://groups.google.com/group/scalagwt).


Happy hacking!

*Scala+GWT team*

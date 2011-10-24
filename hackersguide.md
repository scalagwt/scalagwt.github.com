---
layout: default
title: Scala+GWT hackers' guide
---

Scala+GWT hackers' guide
========================

Git repos
---------

Scala+GWT project consists of a few git repositories:

  * [scalagwt-scala](http://github.com/scalagwt/scalagwt-scala) is a fork of Scala compiler repository that adds jribble backend
  * [scalagwt-gwt](http://github.com/scalagwt/scalagwt-gwt) is a fork of GWT repository where we add support for jribble
  * [scalagwt-library](http://github.com/scalagwt/scalagwt-library) contains build scripts for `scala-library-gwt.jar` which is Scala library tailored to GWT contstraints. This project depends both on `scalagwt-scala` and `scalagwt-gwt` being already built.
  * [scalagwt-sample](http://github.com/scalagwt/scalagwt-sample) is the repository where all samples are stored
  
If you want to hack on any of those repos just fork them on Github. Once you have something ready for review just issue a pull request and we'll look into that.

Suggested local directory layout is to have single `scalagwt` root directory that contains clones of all repos mentioned above.

Building
--------

### Building scalagwt-scala

Building scalagwt-scala is the same as for scala trunk (except you should be building from `scalagwt` branch). Just type `ant` and wait several minutes to complete the build. As the result you'll get Scala compiler that supports compiling to jribble.
  
### Building scalagwt-gwt

Building GWT is easy and follows upstream process too (again, build from `scalagwt` branch). Just type `ant dist-dev`. You need to have gwt tools set up, check [gwt documentation](http://code.google.com/webtoolkit/makinggwtbetter.html#compiling).

### Building scalagwt-library

As mentioned above, this project depends on both `scalagwt-scala` and `scalagwt-gwt`. You need to configure location of those repos using `build.properties` file. If you are sticking to default layout it enough to just copy `build.properties.example` to `build.properties` file.

Once `build.properties` are configured just run `ant`.

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
    cp $SCALAGWT_SCALA/build/quick/misc/scala-devel/plugins/*.jar lib/scala/
    cp $SCALAGWT_LIBRARY/build/lib/scala-library-gwt.jar lib/scala/
    
Assuming that `$SCALAGWT_GWT`, `$SCALAGWT_SCALA`, `$SCALAGWT_LIBRARY` and `$GWT_TOOLS` environment variables are set.

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

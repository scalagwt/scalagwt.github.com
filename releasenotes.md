---
layout: default
title: Scala+GWT release notes
---

Release notes
=============

Scala+GWT 0.1-M1
----------------

The first official release coming from Scala+GWT project.

This release consists of just samples packaged along with snapshot
of jars needed to build them. Those jars include our own version
of both GWT and Scala.

This release doesn't come with any official artifacts apart from
tarball you can download from http://github.com/scalagwt/scalagwt-sample.

### What works

Samples show it the best. Here are some highlights:

  * Mixed Scala/Java projects work very well (for GWT-supported Java subset)
  * Most of Scala language constructs are supported
  * Most of Scala library code that makes sense in a browser context is supported including Scala collections
  
It's fair to say that we are not sure how far one can go with this release. It might be that you can already
build something useful with what we already have. The only way to be sure is start hacking!
  
### Known issues

  * Compilation is very, very slow.
  * `scala.immutable.{TreeMap, TreeSet}` are not supported due to various bugs (thus sorted collections don't work)
  * many patterns in pattern matching logic are not supported (tough issue) examples include 
    * pattern alternatives (`|`)
    * guared patterns (`if` guard)
  * GWT's development mode is broken
  * We are compiling with all optimizations turned off. This results in a slow and very large JavaScript code.
  
### Reporting issues

We appreciate feedback. If you find something that doesn't work (e.g. crashes either Scala or GWT compiler)
or JavaScript gives you weird results we'd love to hear about it. The most effective way of reporting issues
is to modify `Hello World` sample to show your problem. Exact steps are:

  1. Fork `scalagwt-sample` repo from here: http://github.com/scalagwt/scalagwt-sample
  2. Clone it: `git clone git://github.com/YOUR_USER_NAME/scalagwt-sample.git`
  3. Modify hello world sample located in `src/com/google/gwt/sample/jribble/client`
  4. Commit and publish your example.
  5. File a ticket here: http://github.com/scalagwt/scalagwt-sample and mention your
     fork while explaining your issue.
     
If you want to discuss your problem before reporting it, join
[scalagwt@googlegroups.com](http://groups.google.com/group/scalagwt).

### What if I don't know GWT?

That shouldn't be a big problem. You've got Scala source code for samples that show basic functionality
and provides basic setup. You may want to start with channging hello world sample, recompiling it and
testing in a browser.

### What if I don't know Scala?

You might still want to check out samples to see how they might look like in other language than Java.
We'll be cutting a lot more of boilerplate code once GWT libraries and APIs receive enough of Scala's
[pimp-love](http://www.artima.com/weblogs/viewpost.jsp?thread=179766).

### Need help? Want to discuss something?

Join us here: [scalagwt@googlegroups.com](http://groups.google.com/group/scalagwt).


Happy playing!

*Scala+GWT team*

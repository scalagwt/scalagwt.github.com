---
layout: default
title: Scala+GWT
---

Why?
====

Scala is a strongly typed language that is highly compatible with 
Java, but improves on it in several respects.  From the GWT
developer's perspective:

We want to be able to move or copy Scala server-side code to the
client.  Since GWT will only compile Java at present, only Java
code can be reused in this way.

Writing GWT code typically involves a lot of composition.  Scala
traits would really help declutter.  Scala has less boilerplate
than Java, so GWT code written in Scala should be shorter, more
expressive, and more maintainable.

OK Then, Why Not?
=================

The GWT compiler aggressively optimizes the Javascript executables
it produces.  It requires a great deal of intelligence about the
source code.  It does not simply translate JVM bytecode to Javascript.

Scala code cannot be transformed to strict Java.  It is not possible
with present tools to produce bytecode with Scala, decompile it to
valid Java, and put the resulting source into GWT, or even to produce
valid Java directly from Scala, although the experimental java-src
backend gets reasonably close.  Together, these issues make the problem
set a little more challenging.

For more discussion of this issue, see
[this October 2009 thread on google-web-toolkit-contributors](http://groups.google.com/group/google-web-toolkit-contributors/browse_thread/thread/006d4339fb17803e?pli=1)
, which spawned this project.

Read on: [Jribble](jribble)


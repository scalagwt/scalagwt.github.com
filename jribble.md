---
layout: default
title: Jribble
---

Jribble
=======

Java source code does not want to be a target language.  It has
restrictions against logically sound constructs that would be bad
Java practice to write by hand.  Lex Spoon proposed a plan for an
intermediate step, "Loose Java," which we have christened Jribble
(pronounced "Dribble").

Jribble is essentially Java with the interfering restrictions
removed.  Lex: "It's like a puddle of Java. It's also like drivel,
which is appropriate enough for a language no one writes and no
one reads. Computers can entertain themselves with it well enough."

While far from a spec at this point, the general concepts of Jribble
are:

1. There is no rule in constructors about calling the super()
   constructor as the syntactically first thing in a constructor.
2. There is a comma operator expression just like in JavaScript.
3. Any expression can be used in an expression statement, even
   useless things like literals.
4. Types are all Java erased types.
5. Imports are removed.
6. Overloading and overriding are as in Java byte code, including
   override on return type.
7. Method calls are also as in Java bytecode, and specify the full
   method signature.

Our efforts so far have been to create a new "jribble" backend to
Scala that produces output along these lines, and parallel patches
to GWT to understand Jribble input.  As we expose more of the issues
through this process, we'll formalize Jribble -- as a spec.  This
hopefully will open some doors to translating other languages into
a form that GWT can compile and optimize.

The Jribble concept is interesting as a target language, because it's
likely to be an effective target for other JVM languages, not only Scala.
Any language that easily produces valid JVM bytecodes, but struggles to
produce valid Java, might take advantage of Jribble as a bridge to GWT
Javascript compilation.

[OK, enough context.  Take me home](/)

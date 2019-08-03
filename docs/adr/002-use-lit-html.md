# 2. Use lit-html

## Status

Accepted

## Context

In [this PR][1] I started to give the site some dynamic feature, and using (p)react for it
does always mangle state handling with the DOM lib (which (p)react are).
This is an anti-pattern imho, I want the business logic separated and independent of the
(DOM) rendering part.

## Decision

Therefore I switched to lit-html, since it seems to provide this.
[SSR][2] might be a bit more work here, but it feels right.

## Consequences

+ ready for webcomponents
+ state+rendering can be split
- not maintstream (but who cares)

[1]: https://github.com/wolframkriesing/jskatas.org/pull/2
[2]: 001-server-side-rendering.md
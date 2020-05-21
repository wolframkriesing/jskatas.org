# Ideas

- [ ] separate server- and client-side rendering better, improve code
- [ ] allow sorting by "latest", "group by category" (e.g. "object API" "array API", etc.)
- [ ] allow searching, filter down e.g. when typed "arr" show all that contains the string, in real time
- [ ] show changelog
- [ ] show description below kata
- [ ] show learnings (derived from kata file) on demand, this is the describes+its
- [ ] allow searching for katas, incl. the descriptions and describes+its
  - [ ] this might become a book, just in reverse   
- [ ] add a feedback tool, just like Uku has on plausible        
- [ ] prepare jskatas.org to provide urls to kata bundles, such as jskatas.org/bundles/es6/language which es6katas.org
      can redirect to
- [ ] render a blog showing the ADRs (at least), it has author, date, etc. in it (or readable from the repo)  
      do also show the ADRs from the katas repo    

# version 3
- [x] Made bundles linkable on the site
- [x] add ADRs for more transparency
- [x] switch to lit-html (or alike) to not need to "embed" the state handling into the view lib (as (p)react requires it)
  - [x] make it render client-side
  - [ ] ~~make the .env work again~~ remove .env use real ENV vars only
  - [x] make server-side rendering work again!
- [ ] add table view of katas
  - [x] show kata details onclick in modal 
    - [ ] think of accessibility, etc.
  - [ ] allow filtering
  - [ ] make URLs load filtered page
  - [ ] add "social" intent for tweeting about a filtered page
- [ ] daily hint, generated from the katas we have, tweets like "Did you know, Arrays.indexOf can ... #javascript #didYouKnow by @jskatas"
- [ ] the local server URL rewrites disable the editing in the browser :(, fix it
- [ ] use TS linting for typing (public) class'es/file's interfaces

# version 2
- [x] ~~redirect to es6katas to jskatas.org/bundles/es6~~ must be done on es6katas - DONE
- [x] show plausible stats
- [x] render correct links for all katas (esp. non-es6katas)
- [x] FIX: don't show the content twice
- [x] show planned (but not yet published) katas, to make `jskatas.org` also a good overview of the JS versions and what they contained
      and also to make people understand how much more there is to learn
  - [x] show the "in development" marker in the <Kata> comp
- [x] render kata names with ` in them be partly <code>
- [x] capitalize kata name if it does NOT start with code  

# version 1
- [x] use fetch instead of atomic
- [x] move to kavun as test runner, faster, simpler, smaller
- [x] remove workshop banner
- [x] classnames seems to be used rarely
- [x] update react, maybe preact works fine?
- [x] make it run on https
- [x] simplify the deploy, travis has push to gh-pages built in
- [x] move to https://plausible.io/ instead of GA
- [x] show all ESX katas on the page

# version 0 
- [x] pre-render the index.html page at deploy time, so the rendering will be flying fast, only updates 
      will be applied to the DOM once the page was rendered on the client
- [x] separate server- and client-side rendering better, improve code
- [x] add analytics to the page - plausible was added
- [x] open tddbin in a new tab

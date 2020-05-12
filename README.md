[![Traffic stats](https://img.shields.io/badge/analytics-plausible-%236574cd.svg)](https://plausible.io/jskatas.org)

# jskatas.org

Has evolved out of es6katas.org.

## The ES6Katas.org story

[ES6Katas.org] is a simple website that lists various katas (small tasks) for learning ECMAScript 6 by doing it.
Each kata links to [tddbin] and loads the according source code in there. All you have to do is fix
the failing tests. And by doing so you are supposed to use and learn ES6 one small task and feature at a time.

## History

It all started by trying out ES6 in [tddbin] when I had put [babeljs] in there so 
one could play with the latest version of JavaScript.

While learning it I realized that writing unit tests is always a good way to learn 
new things, even language features. So that's how the first [#es6kata][1] came about.
And since the new writing it down is a commit it all ended up in the [katas repo][2] 
and [@basecode] then brought up the idea to use a github search and make a site that
lists all the katas. In the beginning I was sceptical, since I wasn't sure if it would 
really continue. But meanwhile there are already a good number of katas. 
That's how this repo came about.

## Technology

This site uses [lit-html] for abstracting away the DOM (as I like to call it).
On top it also uses lit-html for server-side rendering, which creates a static version
of the page that loads in an instant and the client-side waiting times are minimal.

## Develop

Since nobody has nodejs installed globally anymore, this project doesn't either.
Node is installed via docker and in order to start the project for development
run the following command
- `./run.sh "npm start"` to start the server at port http://localhost:9779
- to run the tests do `./run.sh "npm test"`
- `./run.sh npm run typecheck` to verify that all types (that are checked) are correct
- `./run.sh npm run dev:typecheck` to have it run in watch mode, very suitable for development

[1]: https://twitter.com/tddbin/status/576305472128446466
[2]: https://github.com/tddbin/katas
[tddbin]: https://tddbin.com
[babeljs]: https://babeljs.io
[ES6Katas.org]: https://ES6Katas.org
[@basecode]: https://twitter.com/basecode
[lit-html]: https://lit-html.polymer-project.org/
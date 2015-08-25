# (aleskigulp) Front-End Gulp Workflow

## About

Not so long ago I was looking for a really simple, plug and play style, front end development workflow specifically for front-end development. After searching around a little while I decided to throw my own gulpfile.js file together with a set of, what I consider to be, simple but strong gulp tasks.

The goal was to create this in a way that anyone from novice web developers to intermediate developers would be able to clone this repo and get going with their workflow. That being said, it is far from a complete set of tools and really just covers the basics.

Feature list:

 * Concatenates and compresses JS files.
 * Concatenates and compiles SASS files.
 * Follows a flexble folder structure where anything goes so long as it is placed in the src folder.
 * ...and finally moves the concatenated/compressed/compiled files to the build folder.
 * ...and serves an express server with livereload middleware so you don't need the plugin for your browser to enjoy your changes being reflected as soon as you save them!

Things I would like to add:

 * Auto deletion of the build folder as an optional toggle.
 * ...and any suggestions from adopters of the workflow.
 * ...and I am sure there is still more I'd like to add.

## Prequisites
 * Git CLI (get it here: https://git-scm.com/).
 * Node (npm).

## Instructions

 * Clone this repo (see the right hand side of this page).
 * Browse to your local copy.
 * Open a terminal (Start -> Run -> 'cmd').
 * Type 'gulp' and watch the magic happen!
 * ...and you're all set. From here any of your development work goes inside the src folder and all the magic will happen on save.
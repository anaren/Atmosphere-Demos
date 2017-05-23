# Atmosphere Demos
Atmosphere Samples &amp; Demos Repository

To use these demos, download the .atmo file and import into the Atmosphere IDE

In Atmosphere 2.0 a new feature will be available which will allow you to import from a URL using the following context:

https://atmosphere.anaren.com/developer#import&URLGOESHERE

## Format for repo

Board/ - EG bcm20737

 contrib - contributed demos from atmosphere users and developers that are not on the wiki
 
 indev - demos in development or that have not been vetted
 
 official - demos available via the IDE or from the wiki
 
## Filenaming

.atmo files should not use spaces, replace spaces with underscores in order for the IDE import link feature to work correctly.

## Compiling alldemos.json

This repository comes with a package.json and gulpfile.js that will compile an alldemos.json which is an index of all the official demos. To use gulp to compile alldemos follow these instructions:

1. Copy this repository locally.
2. Have node.js and npm installed.
3. > npm install
4. > gulp

Gulp will compile the demo json index.


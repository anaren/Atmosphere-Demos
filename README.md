# Atmosphere Demos

Anaren Atmosphere Samples &amp; Demos Repository

To use these demos, download the .atmo file and import into the Atmosphere IDE available at https://atmosphere.anaren.com


## URL Import Feature

Since Atmosphere 2.0, you can import projects directly into the IDE from a URL using the following context:

> https://atmosphere.anaren.com/developer#import&URLGOESHERE

You will need to be actively logged into Atmosphere for this feature to work


## Demos Repository Format

The Atmosphere Demo Projects are sorted first by the hardware they are designed for and the by the category of demo. The most vetted and working demos will be found in the "official" directories.

format: {platform}/{demo type}/filename.atmo
eg:  bcm20737/official/demo.atmo

 
## For Developers Contributing to Atmosphere Demos

Please read and follow these simple guidelines to creating demos and working with this repository


### Branch

Please commit work in progress to the "devel" branch until updates are approved and ready to be merged with "master".


### Filenaming

* .atmo files should not use spaces, replace spaces with underscores in order for the IDE import link feature to work correctly.
* Use underscores in filenames instead of CamelCase for better human readability, for example: LED_Toggle.atmo vs. LEDToggle.atmo 
* There is no need to for filenames to include the word "example" or similar descriptors, for instance: LED_Toggle vs. LED_Toggle_Example.atmo


### Project File QA

* Unless stated otherwise in the project description, all projects in the "official" directories should meet the following criteria.
  * Load and build across the major browser and OS environements in the IDE.
  * Be successfully programmed with the Atmosphere Programmer if applicable.
  * Mobile Application tested on Android and iOS if applicable.
  * Cloud provisioning and connectivity tested and confirmed if applicable.


### Compiling alldemos.json

This repository comes with a gulpfile that will compile an "alldemos.json" file, which is an index of all the official demos that meet a specific version criteria.

To use gulp to compile alldemos.json follow these instructions:

1. Copy this repository locally.
2. Have node.js and npm installed.
3. > npm install
4. > gulp

The resulting .json files are for indexing purposes only and do not need to be checked into git.


### Automated Demo Compilation

The Atmosphere Server regularly pulls the Atmosphere Demos repository and compiles alldemos.json automatically and can be found at:

> https://atmosphere.anaren.com/demos/alldemos.json

This location is also a live mirror of the GitHub repository, and as such can be used for project import using the import URL, for example, the following should import the 43364 Factory Demo:

> https://atmosphere.anaren.com/developer#import&https://atmosphere.anaren.com/demos/intelCurie/official/ActivityTracker.atmo


#!/usr/bin/env zx

/**
 * post-build.mjs
 * 
 * this script is designed to be run from Github Actions
 **/

// CNAME file needed by github pages
await $`cp ./CNAME ./build/CNAME`
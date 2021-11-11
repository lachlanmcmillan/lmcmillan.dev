#!/usr/bin/env zx

/**
 * pre-build.mjs
 * 
 * this script is designed to be run from Github Actions
 **/

const buildDetails = {
	"build_id": process.env.GITHUB_RUN_NUMBER || "unkown",
	"build_commit": process.env.GITHUB_SHA || "unknown",
	"build_user": process.env.GITHUB_ACTOR || "unknown",
	"build_timestamp": Date.now()
}
const buildDetailsFilePath = './build/build-details.json';
await fs.writeFile(buildDetailsFilePath, JSON.stringify(buildDetails, null, 2));
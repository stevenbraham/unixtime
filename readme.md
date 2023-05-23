# Unixtime

I often need to use Unix timestamps to search for stuff in MySQL tables. So I wrote this tool to quickly convert a date string to an Unix timestamp.

Credits to the [date-util library](https://www.npmjs.com/package/date-util) for providing the strtotime parser.

## Installation

1. Clone this repo
1. Install dependencies: `npm install`
1. Run Webpack to generate a build: `npm run build`
1. (For Unix systems) add executable permissions: `chmod +x bin/index.js`
1. Make the CLI tool globally available on your system: `npm install -g .`

## Usage

After installation the tool should be available as the `unixtime <datestring>` command. Eg. `unixtime "-30 days"`

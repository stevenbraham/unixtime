# Unixtime

I often need to use Unix timestamps to search for stuff in MySQL tables. So I wrote this tool to quickly convert a date string to an Unix timestamp and vice versa.

Credits to the [date-util library](https://www.npmjs.com/package/date-util) for providing the strtotime parser.

## Installation

1. Clone this repo
1. Install dependencies: `npm install`
1. Run Webpack to generate a build: `npm run build`
1. (For Unix systems) add executable permissions: `chmod +x bin/index.js`
1. Make the CLI tool globally available on your system: `npm install -g .`

## Usage

After installation the tool should be available as the `unixtime` command. There are two sub commands:

### to-unix

This is the default command. Use `unixtime <string>` or `unixtime to-unix <string>` to convert a English datestring to an Unix timestamp. Eg. `unixtime to-unix "+30 days"`

#### from-unix

Use `unixtime from-unix <timestamp>` to convert an Unix timestamp back to a normal datetime string.

import "date-util";

// extend Date object to have strtotime method
declare global {
  interface Date {
    strtotime: (str: string) => Date | false;
  }
}

// check if date string is present, first argument is node, second is script
if (process.argv.length < 3) {
  console.log("Usage: unixtime <date string>");
  process.exit(1);
}

const timesString = process.argv[2];

const parsedDate = new Date().strtotime(timesString);

if (parsedDate === false) {
  console.log("Invalid date string");
  process.exit(1);
}

console.log(Math.round(parsedDate.getTime() / 1000)); // unix time in seconds
process.exit(0);

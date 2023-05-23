import "date-util";
import { Command } from "commander";

// extend Date object to have strtotime method
declare global {
  interface Date {
    strtotime: (str: string) => Date | false | number; // return type is Date or false or number (unix timestamp)
  }
}

const program = new Command();

program
  .name("unixtime")
  .description(
    "CLI tools for converting Unix timestmaps to human readable dates and vice versa"
  )
  .version("1.0.0");

program
  .command("to-unix", { isDefault: true })
  .description("Parse date string and return unix timestamp")
  .argument("<string>", "date string to parse")
  .action((timesString: string) => {
    const parsedDate = new Date().strtotime(timesString);
    if (parsedDate === false) {
      return program.error("Invalid date string");
    }

    if (typeof parsedDate === "number") {
      // already unix timestamp
      console.log(parsedDate);
      return;
    }

    // returned object is Date, convert to unix timestamp
    console.log(Math.round(parsedDate.getTime() / 1000)); // unix time in seconds
  });

program.parse();

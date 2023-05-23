import { Command } from "commander";
import toUnix from "./commands/toUnix";
import fromUnix from "./commands/fromUnix";

const program = new Command();

program
  .name("unixtime")
  .description(
    "CLI tools for converting Unix timestmaps to human readable dates and vice versa"
  )
  .version("1.0.0");

program
  .command("from-unix")
  .description("Parses an unix timestamp and return human readable date")
  .argument("<timestamp>", "timestmap string to parse")
  .action(fromUnix);
program
  .command("to-unix", { isDefault: true })
  .description("Parses date string and return unix timestamp")
  .argument("<string>", "date string to parse")
  .action(toUnix);
program.parse();

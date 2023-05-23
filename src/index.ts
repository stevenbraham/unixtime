import { Command } from "commander";
import toUnix from "./commands/toUnix";

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
  .action(toUnix);

program.parse();

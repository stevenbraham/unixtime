import { program } from "commander";

/**
 * Convets unix timestamp to human readable date
 * @param timestamp
 * @returns
 */
export default function fromUnix(timestamp: string): void {
  // timestamp should be a positive 32 bit integer

  if (!/^\d+$/.test(timestamp)) {
    return program.error("Invalid unix timestamp");
  }

  const parsedDate = new Date(parseInt(timestamp) * 1000);
  console.log(parsedDate);
}

export class Logger {
  log(message: string): void {
    console.log(`[Log] ${new Date().toISOString()} | ${message}`);
  }
}

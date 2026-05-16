export class EmailService {
  sendWelcome(email: string, name: string): void {
    console.log(`[Email] → ${email}: "Вітаємо, ${name}!"`);
  }
}

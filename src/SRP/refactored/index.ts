import { UserValidator } from './UserValidator';
import { UserRepository } from './UserRepository';
import { EmailService } from './EmailService';
import { Logger } from './Logger';

const validator = new UserValidator();
const repo = new UserRepository();
const mailer = new EmailService();
const logger = new Logger();

function register(name: string, email: string, password: string): void {
  if (!validator.validate(name, email, password)) return;

  repo.save({ name, email });
  mailer.sendWelcome(email, name);
  logger.log(`Новий юзер: ${email}`);
}

register('Іван', 'ivan@example.com', 'secret123');
register('X', 'broken', '123'); // помилки

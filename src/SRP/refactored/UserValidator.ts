export class UserValidator {
  validate(name: string, email: string, password: string): boolean {
    if (!name || name.length < 2) {
      console.log('Помилка: імя занадто коротке');
      return false;
    }
    if (!email.includes('@')) {
      console.log('Помилка: невалідний email');
      return false;
    }
    if (password.length < 6) {
      console.log('Помилка: пароль мінімум 6 символів');
      return false;
    }
    return true;
  }
}

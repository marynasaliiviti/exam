// АНТИПАТЕРН: клас робить все відразу
// валідує, зберігає, відправляє листи і логує — це порушення SRP

export class UserManager {
  private users: { name: string; email: string }[] = [];

  register(name: string, email: string, password: string): void {
    // 1. валідація
    if (!name || name.length < 2) {
      console.log('Помилка: імя занадто коротке');
      return;
    }
    if (!email.includes('@')) {
      console.log('Помилка: невалідний email');
      return;
    }
    if (password.length < 6) {
      console.log('Помилка: пароль мінімум 6 символів');
      return;
    }

    // 2. збереження в "базу даних"
    this.users.push({ name, email });
    console.log(`[DB] Збережено користувача: ${name}`);

    // 3. відправка вітального листа
    console.log(`[Email] Лист відправлено на ${email}: "Вітаємо, ${name}!"`);

    // 4. логування
    console.log(`[Log] ${new Date().toISOString()} | Новий юзер: ${email}`);
  }

  getAll(): void {
    this.users.forEach(u => console.log(u));
  }
}

// Використання
const manager = new UserManager();
manager.register('Іван', 'ivan@example.com', 'secret123');
manager.register('X', 'broken', '123'); // помилки

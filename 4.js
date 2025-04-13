// Класс пользователя
class User {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  }
  
  // Фейк данные с сервера
  const fakeUserData = [
    { name: 'Анна', salary: 3000 },
    { name: 'Иван', salary: 3500 },
    { name: 'Мария', salary: 2000 },
    { name: 'Дмитрий', salary: 5000 }
  ];
  
  // Функция симуляции загрузки пользователей
  function fetchUsers() {
    return new Promise((resolve) => {
      console.log('Загрузка пользователей...');
      setTimeout(() => {
        resolve(fakeUserData);
      }, 2000);
    });
  }
  
  // Асинхронная функция обработки
  async function processUsers() {
    try {
      const usersData = await fetchUsers();
      console.log('Пользователи загружены:');
  
      const users = [];
      let totalSalary = 0;
  
      for (const userData of usersData) {
        const user = new User(userData.name, userData.salary);
        users.push(user);
        console.log(`${user.name} - ${user.salary}₽`);
        totalSalary += user.salary;
      }
  
      const averageSalary = totalSalary / users.length;
      console.log(`Средняя зарплата: ${averageSalary.toFixed(2)}р`);
    } catch (error) {
      console.error('Ошибка при загрузке пользователей:', error);
    }
  }
  
  processUsers();
  
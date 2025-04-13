// Массив с фейковыми комментариями, имитирующий данные с сервера
const fakeComments = [
    {id: 1, text: 'Хороший товар!'},
    {id: 2, text: 'Доставка была долгой.'},
    {id: 3, text: 'Очень доволен покупкой.'},
    {id: 4, text: 'Товар качественный и соответствует описанию.'},
    {id: 5, text: 'Быстрая доставка и вежливый курьер.'},
    {id: 6, text: 'Упаковка товара была надежной.'},
    {id: 7, text: 'Долго ждал товар, но всё пришло целым.'},
    {id: 8, text: 'Покупкой доволен, буду заказывать ещё.'},
    {id: 9, text: 'Цена на товар приемлемая.'},
    {id: 10, text: 'Плохая упаковка, но товар хороший.'},
    {id: 11, text: 'Слишком долгая доставка, но товар отличный.'},
    {id: 12, text: 'Не рекомендую — товар не соответствует описанию.'},
];

// Функция, имитирующая загрузку комментариев с сервера (с задержкой 2 секунды)
function fetchComments() {
    return new Promise(resolve => {
        setTimeout(() => resolve(fakeComments), 2000);
    });
}

// Основная функция поиска комментариев по ключевому слову
async function searchComments(keyword) {
    try {
        let commentsTexts = ''; // Строка для сбора найденных комментариев
        let counter = 0; // Счётчик совпадений

        const comments = await fetchComments();

        // Фильтруем комментарии по ключевому слову
        let results = comments.filter(c => 
            c.text.toLowerCase().includes(keyword.toLowerCase())
        );

        //Проверка найдены ли коментарии
        if(results.length === 0){
            alert(`Комментарии по ключевому слову "${keyword}" не найдены`);
        }

        // Найденые коментарии собираются в одну строку
        else {
            results.forEach(res => {
                commentsTexts += `\n- ${res.text}`;
                counter++;
            });

            alert(`Комментарии по ключевому слову "${keyword}" (${counter}): ${commentsTexts}`);
        }
        
    } catch (error) {
        alert('Ошибка при поиске комментария');
        console.error(`Ошибка: ${error}`);
    }
}

let keyword = prompt('Введите ключевое слово для поиска комментария');

if (keyword === null) {
}
else if (keyword.trim() === '') {
    alert('Вы не ввели ключевое слово для поиска!');
}
else {
    searchComments(keyword.trim());
}

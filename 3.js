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

function fetchComments() {
    return new Promise(resolve => {
        setTimeout(() => resolve(fakeComments), 2000);
    });
}

async function searchComments(keyword) {
    try{
        let commentsTexts = '';
        let counter = 0;
        const comments = await fetchComments();
        let results = comments.filter(c => c.text.toLowerCase().includes(keyword.toLowerCase()));

        results.forEach(res => {
            commentsTexts += `\n- ${res.text}`;
            counter++;
        });

        alert(`Комментарии по ключевому слову "${keyword}" (${counter}): ${commentsTexts}`)
    } catch (error) {
        alert('Ошибка при поиске комментария')
        console.error(`Ошибка: ${error}`)
    }
}

let keyword = prompt('Введите ключевое слово для поиска комментария');

if (keyword === null) {
} else if (keyword.trim() === '') {
    alert('Вы не ввели ключевое слово для поиска!');
} else {
    searchComments(keyword.trim());
}
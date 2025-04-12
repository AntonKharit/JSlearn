const fakeComments = [
    {id: 1, text: 'Хороший товар!'},
    {id: 2, text: 'Доставка была долгой.'},
    {id: 3, text: 'Очень доволен покупкой.'},
];

function fetchComments() {
    return new Promise(resolve => {
        setTimeout(() => resolve(fakeComments), 2000);
    });
}

async function searchComments(keyword) {
    try{
        let commentsTexts = '';
        const comments = await fetchComments();
        let results = comments.filter(c => c.text.toLowerCase().includes(keyword.toLowerCase()));

        results.forEach(res => {
            commentsTexts += ` ${res.text}`;
        });

        alert(`Комментарии по ключевому слову "${keyword}": ${commentsTexts}`)
    } catch (error) {
        alert('Ошибка при поиске комментария')
        console.error(`Ошибка: ${error}`)
    }
}

let keyword = prompt('Введите ключевое слово для поиска комментария')
searchComments(keyword)
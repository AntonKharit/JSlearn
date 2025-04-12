const fakePosts = [
    { id: 1, title: 'Пост 1' },
    { id: 2, title: 'Пост 2' },
]
const fakeComments = [
    { id: 1, text: 'Комментарий 1' },
    { id: 2, text: 'Комментарий 2' },
]


// Функция для загрузки постов 
function fetchPosts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fakePosts);
        }, 1000);
    });
}
  
// Функция для загрузки комментариев 
function fetchComments() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fakeComments);
        }, 1500);
    });
}

//асинхронная функция для одновремменного выполнения запроса
async function loadData() {
    try{
        const [posts, comments] = await Promise.all([
            fetchPosts(),
            fetchComments()
        ])

        console.log('==Посты==');
        posts.forEach(post => {
            console.log(`- ${post.title}`)
        });

        console.log('==Коментарии==')
        comments.forEach(comment => {
            console.log(`- ${comment.text}`)
        })
    }catch (error){
        console.error('Ошибка при загрузке:', error)
    }
}

loadData()
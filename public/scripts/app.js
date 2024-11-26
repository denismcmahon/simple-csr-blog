// fetch posts from the API and render them
document.addEventListener('DOMContentLoaded', async () => {
    const postList = document.getElementById('post-list');

    try {
        const response = await fetch('/api/posts');
        const posts = await response.json();

        posts.forEach(post => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `/post.html?id=${post.id}`;
            link.textContent = post.title;
            listItem.appendChild(link);
            postList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
});
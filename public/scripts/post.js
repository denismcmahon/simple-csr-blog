// fetch a single post based on the id in the query string
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');

    try {
        const response = await fetch(`/api/posts/${postId}`);
        const post = await response.json();
        
        postTitle.textContent = post.title;
        postContent.textContent = post.content;
    } catch (error) {
        console.error('Error fetching post:', error);
        postTitle.textContent = 'Post not found';
        postContent.textContent = 'Please try again later.';
    }
});
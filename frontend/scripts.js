// src/frontend/scripts.js

// Handle create user form submission
document.getElementById('create-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        alert(`User created: ${data.username}`);
    } catch (error) {
        console.error('Error:', error);
    }
});

// Handle create post form submission
document.getElementById('create-post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = document.getElementById('user-id').value;
    const content = document.getElementById('content').value;

    try {
        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, content })
        });
        const data = await response.json();
        alert(`Post created: ${data.content}`);
    } catch (error) {
        console.error('Error:', error);
    }
});

// Handle get user form submission
document.getElementById('get-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = document.getElementById('get-user-id').value;

    try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`);
        const data = await response.json();
        document.getElementById('user-data').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error:', error);
    }
});

// Handle get post form submission
document.getElementById('get-post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const postId = document.getElementById('get-post-id').value;

    try {
        const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
        const data = await response.json();
        document.getElementById('post-data').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error:', error);
    }
});

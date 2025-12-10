// Concepts: Fetch API, Async/Await

// Q1.	Fetch posts from JSONPlaceholder API and print titles.
async function fetchPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();
    posts.forEach(post => {
        console.log(post.title);
    });
}

fetchPosts(); // Logs titles of all posts


// Q2.	Fetch random users from RandomUser API and display names.
async function fetchRandomUsers() {
    let response = await fetch('https://randomuser.me/api/?results=5');
    let data = await response.json();
    data.results.forEach(user => {
        console.log(`${user.name.first} ${user.name.last}`);    
    }
    );
}

fetchRandomUsers(); // Logs names of 5 random users
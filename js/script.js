console.log("script.js is loaded");

const blogPosts = {
  1: {
    title: "Post 1 Title",
    content: "This is the full content of the first post.",
  },
  2: {
    title: "Post 2 Title",
    content: "This is the full content of the second post.",
  },
  3: {
    title: "Post 3 Title",
    content: "This is the full content of the third post.",
  },
};

// Get the post ID from the URL (e.g., ?id=1)
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Load the corresponding post content
if (blogPosts[postId]) {
  const post = blogPosts[postId];
  document.getElementById("blog-post").innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
  `;
} else {
  document.getElementById("blog-post").innerHTML = `<p>Post not found.</p>`;
}

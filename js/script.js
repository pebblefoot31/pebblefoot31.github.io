console.log("script.js is loaded");

const blogPosts = {
  1: {
    title: "Post 1 Title",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

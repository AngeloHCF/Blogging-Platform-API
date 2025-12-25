Blogging Platform API

This is a simple API for managing blog posts. You can create, read, update, and delete posts using HTTP requests. It’s designed to be beginner-friendly and easy to use with tools like Postman.

Base URL
http://localhost:3000/posts

Endpoints
1. Get Posts

Get all posts:

GET /posts


Get a post by ID:

GET /posts?id=1


Search posts by title:

GET /posts?title=JavaScript


Note: The title search is case-insensitive and will match anywhere in the post title.

2. Create a Post

Endpoint:

POST /posts


Body (JSON):

{
  "title": "My First Post",
  "content": "This is the content of my post.",
  "category": "Programming",
  "tags": "JavaScript, NodeJS"
}

3. Update a Post

Endpoint:

PUT /posts


Body (JSON):

{
  "id": 1,
  "title": "Updated Post Title",
  "content": "Updated content here."
}

4. Delete a Post

Endpoint:

DELETE /posts


Body (JSON):

{
  "id": 1
}

Tips for Beginners

Use Postman or any HTTP client to test your API.

Remember that GET requests use query parameters (?id=1&title=JavaScript) instead of a body.

Use JSON format for POST, PUT, and DELETE requests.

Start by creating a post, then try reading, updating, and deleting it to see how it works.

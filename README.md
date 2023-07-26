Sure! Here's the merged README file containing information for all the endpoints for Events, Posts, and Podcasts in the HacktivBlog API.

---

# HacktivBlog API

## Base URL
```
https://hacktivblog-api.vercel.app/
```

## Events Endpoints

### 1. Get all Events
```
GET /api/event
```

Returns an array of all events available in the system.

#### Sample Request
```
GET https://hacktivblog-api.vercel.app/api/event
```

#### Sample Response
```json
[
  {
    "id": "64c0cd4eaa74d500da51b692",
    "createdAt": "2023-07-26T07:37:50.294Z",
    "updatedAt": "2023-07-26T07:37:50.294Z",
    "title": "Event 1",
    "description": "events",
    "date": "11/12/12",
    "time": "10:10",
    "location": "online",
    "eventId": "72701570-46b7-466a-8963-563d67fe7361",
    "authorId": "64c08080345642ebf8dffaef"
  },
  // More events...
]
```

### 2. Get Events by Email
```
GET /api/event?email=example@email.com
```

Returns an array of events that are associated with the specified email.

#### Sample Request
```
GET https://hacktivblog-api.vercel.app/api/event?email=example@email.com
```

#### Sample Response
```json
[
  {
    "id": "64c0cd4eaa74d500da51b692",
    "createdAt": "2023-07-26T07:37:50.294Z",
    "updatedAt": "2023-07-26T07:37:50.294Z",
    "title": "Event 1",
    "description": "events",
    "date": "11/12/12",
    "time": "10:10",
    "location": "online",
    "eventId": "72701570-46b7-466a-8963-563d67fe7361",
    "authorId": "64c08080345642ebf8dffaef"
  },
  // More events...
]
```

### 3. Get Event by Event ID
```
GET /api/event?eventId=72701570-46b7-466a-8963-563d67fe7361
```

Returns the event object that matches the specified Event ID.

#### Sample Request
```
GET https://hacktivblog-api.vercel.app/api/event?eventId=72701570-46b7-466a-8963-563d67fe7361
```

#### Sample Response
```json
{
  "id": "64c0cd4eaa74d500da51b692",
  "createdAt": "2023-07-26T07:37:50.294Z",
  "updatedAt": "2023-07-26T07:37:50.294Z",
  "title": "Event 1",
  "description": "events",
  "date": "11/12/12",
  "time": "10:10",
  "location": "online",
  "eventId": "72701570-46b7-466a-8963-563d67fe7361",
  "authorId": "64c08080345642ebf8dffaef"
}
```

### 4. Create a new Event
```
POST /api/event
```

Creates a new event with the provided details in the request body.

#### Sample Request
```
POST https://hacktivblog-api.vercel.app/api/event
Content-Type: application/json

{
  "title": "Event 1",
  "description": "events",
  "date": "11/12/12",
  "time": "10:10",
  "location": "online",
  "authorEmail": "anjumanraj2@gmail.com"
}
```

#### Sample Response (Status Code: 201 Created)
```json
{
  "id": "64c0cd4eaa74d500da51b692",
  "createdAt": "2023-07-26T07:37:50.294Z",
  "updatedAt": "2023-07-26T07:37:50.294Z",
  "title": "Event 1",
  "description": "events",
  "date": "11/12/12",
  "time": "10:10",
  "location": "online",
  "eventId": "72701570-46b7-466a-8963-563d67fe7361",
  "authorId": "64c08080345642ebf8dffaef"
}
```

## Posts Endpoints

### 1. Get all Posts
```
GET /api/post
```

Returns an array of all posts available in the system.

#### Sample Request
```
GET https://hacktivblog-api.vercel.app/api/post
```

#### Sample Response
```json
[
  {
    "id": "64c08081345642ebf8dffaf0",
    "createdAt": "2023-07-26T02:10:07.566Z",
    "updatedAt": "2023-07-26T02:10:07.566Z",
    "title": "Post 1",
    "content": "React is a very popular front-end framework that helps us build user interfaces efficiently Unfortunately. If we can’t use && correctly, it will easily lead to UI errors. It’s 2023 and we need to know: React UI interface error caused by && operators How && work？What should we use instead of &&?",
    "postId": "2bf20d37-78f3-4934-a2a3-03e07d8183c2",
    "authorId": "64c08080345642ebf8dffaef"
  },
  // More posts...
]
```

### 2. Get Post by Post ID
```
GET /api/post?postId=64c08081345642ebf8dffaf0
```

Returns the post object that matches the specified Post ID.

#### Sample Request
```
GET https://hacktivblog-api.vercel.app/api/post?postId=64c08081345642ebf8dffaf0
```

#### Sample Response
```json
{
  "id": "64c0

d003aa74d500da51b694",
  "createdAt": "2023-07-26T07:49:19.499Z",
  "updatedAt": "2023-07-26T07:49:19.499Z",
  "title": "Post 1",
  "content": "React is a very popular front-end framework that helps us build user interfaces efficiently Unfortunately. If we can’t use && correctly, it will easily lead to UI errors. It’s 2023 and we need to know: React UI interface error caused by && operators How && work？What should we use instead of &&?",
  "postId": "98be19cf-2da8-4f64-9c10-0ad887b7860a",
  "authorId": "64c08080345642ebf8dffaef"
}
```

### 3. Create a new Post
```
POST /api/post
```

Creates a new post with the provided details in the request body.

#### Sample Request
```
POST https://hacktivblog-api.vercel.app/api/post
Content-Type: application/json

{
  "title": "Post 2",
  "content": "React is a very popular fror caused by && operators How && work？What should we use instead of &&?",
  "authorEmail": "anjumanraj2@gmail.com"
}
```

#### Sample Response (Status Code: 201 Created)
```json
{
  "id": "64c0d08eaa74d500da51b697",
  "createdAt": "2023-07-26T07:51:42.707Z",
  "updatedAt": "2023-07-26T07:51:42.707Z",
  "title": "Post 2",
  "content": "React is a very popular fror caused by && operators How && work？What should we use instead of &&?",
  "postId": "95b902f5-2943-4264-85e4-97cb49954436",
  "authorId": "64c08080345642ebf8dffaef"
}
```

## Podcasts Endpoints

### 1. Get all Podcasts
```
GET /api/podcast
```

Returns an array of all podcasts available in the system.

#### Sample Request
```
GET https://hacktivblog-api.vercel.app/api/podcast
```

#### Sample Response
```json
[
  {
    "id": "64c0d249aa74d500da51b69a",
    "createdAt": "2023-07-26T07:59:02.960Z",
    "updatedAt": "2023-07-26T07:59:02.960Z",
    "title": "Podcast 2",
    "description": "about the podcast",
    "date": "11/12/2023",
    "time": null,
    "location": "online",
    "youtubeLink": null,
    "podcastId": "e44a7fbc-122c-4b84-96bd-b18d20f4ea97",
    "authorId": "64c08080345642ebf8dffaef"
  },
  // More podcasts...
]
```

### 2. Get Podcast by Podcast ID
```
GET /api/podcast?podcastId=e44a7fbc-122c-4b84-96bd-b18d20f4ea97
```

Returns the podcast object that matches the specified Podcast ID.

#### Sample Request
```
GET https://hacktivblog-api.vercel.app/api/podcast?podcastId=e44a7fbc-122c-4b84-96bd-b18d20f4ea97
```

#### Sample Response
```json
{
  "id": "64c0d249aa74d500da51b69a",
  "createdAt": "2023-07-26T07:59:02.960Z",
  "updatedAt": "2023-07-26T07:59:02.960Z",
  "title": "Podcast 2",
  "description": "about the podcast",
  "date": "11/12/2023",
  "time": null,
  "location": "online",
  "youtubeLink": null,
  "podcastId": "e44a7fbc-122c-4b84-96bd-b18d20f4ea97",
  "authorId": "64c08080345642ebf8dffaef"
}
```

### 3. Create a new Podcast
```
POST /api/podcast
```

Creates a new podcast with the provided details in the request body.

#### Sample Request
```
POST https://hacktivblog-api.vercel.app/api/podcast
Content-Type: application/json

{
  "title": "Podcast 2",
  "date": "11/12/2023",
  "description": "about the podcast",
  "location": "online",
  "youtube": "youtube.link",
  "authorEmail": "anjumanraj2@gmail.com"
}
```

#### Sample Response (Status Code: 201 Created)
```json
{
  "id": "64c0d249aa74d500da51b69a",
  "createdAt": "2023-07-26T07:59:02.960Z",
  "updatedAt": "2023

-07-26T07:59:02.960Z",
  "title": "Podcast 2",
  "description": "about the podcast",
  "date": "11/12/2023",
  "time": null,
  "location": "online",
  "youtubeLink": null,
  "podcastId": "e44a7fbc-122c-4b84-96bd-b18d20f4ea97",
  "authorId": "64c08080345642ebf8dffaef"
}
```

## Status Codes
- 200 OK: The request was successful, and the response body contains the requested data.
- 201 Created: The request was successful, and a new resource was created as a result.
- 404 Not Found: The requested resource was not found.
- 500 Internal Server Error: An unexpected error occurred on the server.

## Error Handling
In case of an error, the API will return a JSON response with an error message to provide further details about the issue.

## Authentication
Authentication details (if required) should be included in the headers of the request.

## Rate Limiting
The API may have rate-limiting policies in place to control the number of requests per client.

## Additional Notes
- Replace `localhost:3000` in the endpoints with `https://hacktivblog-api.vercel.app/` when making actual requests to the live API.

Feel free to reach out if you have any questions or need further assistance. Happy coding!

---
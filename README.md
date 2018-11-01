# Lambda Note Backend

- [Trello board](https://trello.com/b/1fdBmp7I)
- [Netlify](https://reactnotes.netlify.com)

## Notes API

- A server that will deliver notes can be found [here](https://agile-bastion-89851.herokuapp.com/):

- One thing to be aware of is that this server is a shared resource. Any notes you enter will be viewable to everyone who connects to the server.

- A note has this basic format:

```js
  {
    "id": 1,
    "title": "Note Title",
    "content": "Note Body",
  }
```

- There is also an "id" attribute, which is number that auto increments. It is automatically assigned by the server and will be returned as part of the data.

### https://agile-bastion-89851.herokuapp.com/api/note

a `GET` request to this route will return a list of all the notes.

### https://agile-bastion-89851.herokuapp.com/api/note/id

a `GET` request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

### https://agile-bastion-89851.herokuapp.com/api/note

a `POST` request to this route with the title and content in the req.body will create a new note. The response from the server will be the ID of the new note.

### https://agile-bastion-89851.herokuapp.com/api/note/id

a `PUT` request to this route with the title and content in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

### https://agile-bastion-89851.herokuapp.com/api/note/id

a `DELETE` request to this route will delete the note with the specified ID.

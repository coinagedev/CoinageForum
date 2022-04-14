# Coinage Cryptocurrency Discussion Board

"Coinage - Cryptocurrency Discussion Board" is a [reddit](https://www.reddit.com/) style discussion forum web app, "Coinage". Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Also, users will also be able to edit and delete posts and comments.

* This app was built with react, redux, [react-redux-router](https://github.com/reactjs/react-router-redux), [redux-thunk](https://github.com/gaearon/redux-thunk), [material-ui](https://github.com/callemall/material-ui).

* Most application state(Create, Read, Edit, Delete, Voting posts/comments) is managed by the Redux store. Updates are triggered by dispatching actions to reducers.

#### Run React App (Frontend)
* Go to react app `cd coinage`.
* Install all project dependencies with `npm install` in `coinage` folder.
* Run server with `npm start`.
* Check console or browser if server runs on [http://localhost:3000/](http://localhost:3000/).


#### Run local backend development server (Node)
To install and start the API server, run the following commands in  `api-server` directory:

* Go to Server Directory `cd coinage/src/api-server`.
* Install all server dependencies with `npm install`.
* Run backend server with `node server.js`.
* Check console or browser if server runs on [http://localhost:3001/](http://localhost:3001/).

### To build & deploy on firebase:
```
npm run build && npm run deploy
```

## Documentation
### What's included
Within the download you'll find the following directories and files in `src`:

```
|-- api-server
|   |-- README.md
|   |-- categories.js
|   |-- comments.js
|   |-- config.js
|   |-- package.json
|   |-- posts.js
|   |-- server.js
|   `-- tabs.js
|-- components
|   |-- assets
|   |   |-- GithubIcon.js
|   |   `-- LoadingProgress.js
|   |-- footer
|   |   `-- CopyrightBar.js
|   |-- header
|   |   `-- HeaderBar.js
|   |-- menu
|   |   |-- CategoryContainer.js
|   |   `-- TabContainer.js
|   |-- pages
|   |   |-- AllPostsPage.js
|   |   |-- CategoryPostsPage.js
|   |   |-- MainRouterSettingLayoutPage.js
|   |   |-- NotFound.js
|   |   |-- PostDetailComments.js
|   |   `-- PostDetailPage.js
|   `-- post
|       |-- body
|       |   `-- PostContent.js
|       |-- buttons
|       |   |-- CommentButton.js
|       |   |-- PostSaveCancelButton.js
|       |   |-- PostSettingButton.js
|       |   `-- UpDownVoter.js
|       |-- create
|       |   |-- NewComment.js
|       |   `-- NewPost.js
|       `-- list
|           |-- PostCard.js
|           `-- PostListContainer.js
|-- history.js
|-- index.css
|-- index.js
|-- modules
|   |-- actionTypes
|   |   |-- menuTypes.js
|   |   `-- postsTypes.js
|   |-- actions
|   |   |-- menu.js
|   |   `-- posts.js
|   |-- reducers
|   |   |-- menu.js
|   |   `-- posts.js
|   `-- root
|       |-- configStore
|       |   `-- index.js
|       |-- configurl.js
|       |-- headers.js
|       `-- rootReducer
|           `-- index.js
|-- registerServiceWorker.js
|-- store.js
|-- styles
|   |-- CustomTheme.js
|   |-- assets
|   |   `-- LoadingProgress.js
|   |-- buttons
|   |   |-- CommentButton.js
|   |   |-- PostSaveCancelButton.js
|   |   `-- UpDownVoter.js
|   |-- footer
|   |   `-- CopyrightBar.js
|   |-- form
|   |   |-- NewComment.js
|   |   `-- NewPost.js
|   |-- header
|   |   `-- HeaderBar.js
|   |-- menu
|   |   |-- CategoryContainer.js
|   |   `-- TabContainer.js
|   |-- page
|   |   |-- MainRouterSettingLayoutPage.js
|   |   |-- NotFound.js
|   |   `-- PostDetailPage.js
|   `-- post
|       |-- PostCard.js
|       |-- PostContent.js
|       `-- PostListContainer.js
`-- utils
    `-- utils.js
```

### TBD
* Use Firebase for backend.

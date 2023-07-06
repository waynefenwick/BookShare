# BookShare

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

BookShare is made for users that want an application where they can share their love of reading with other people. This application is a forum-style website where the user may create login credentials using their email. Once signed in the user can start creating posts regarding any books they've read other users who are also signed up may then interact with that post and create a back and forth conversation based on that book. The user may also interact with users posts, aside from interacting with other users they may also edit/delete their own posts. There's also a book Api section dedicated for the user to find new books they may want to read and spark another conversation.

Application is deployed through Heroku.

Deployed link : https://coolbookshare-8cdf867ffeb3.herokuapp.com/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Gif Demo](#gif-demo)
- [Code Snippets](#code-snippets)
- [Credits](#credits)
- [Contributors](#contributors)
- [License](#license)

## Installation

The following will be a guide about installing the application and getting it to run once completed

- Start by forking the repository
- Next perform a npm install

```bash
npm install / npm i
```

- Then, create a dotenv file input the

* DB_NAME=book_db,
* DB_USER="your_user",
* DB_PASSWORD="your_password"

````
- Once that is all completed, in the terminal start the server

```bash

node server.js
````

## Usage

The following application allows the user to:

- Search for books by name
- See details about the book such as author, title, description
- Add comments for the book,
- Read others people comments,
- Create edit And delete the post,
- Create personal account with name, email, and password

## Gif Demo

<img src="{}" width=900px>

## Code Snippets

Example of fetching from Google Book API

<br>

<img src="./public/images/open-api.jpg" width=900px>

<br>

Application templating language

<br>

<img src="./public/images/template-lng.jpg" width=900px>

<br>

Separating routes for cleaner code

<br>

<img src="./public/images/clear-code.jpg" width=900px>

<br>

## Credits

Technologies used

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Session](https://img.shields.io/badge/Session-blue?style=for-the-badge&logo=Session&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars-black?style=for-the-badge&logo=handlebarsdotjs&logoColor=white)
![Fetch](https://img.shields.io/badge/fetch-red?style=for-the-badge&&logoColor=white)

### API used [Google Book API](https://openlibrary.org)

## Contributors

- Wayne Fenwick [GitHub](https://github.com/waynefenwick/BookShare)
- Arael Tijerina Jr [GitHub](https://github.com/waynefenwick/BookShare)
- Md Mamatajur Rashed [GitHub](https://github.com/mdRashed30/BookShare)
- Joey Sanchez [GitHub](https://github.com/waynefenwick/BookShare)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Wayne Fenwick, Arael Tijerina Jr, Md Mamatajur Rashed & Joey Sanchez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

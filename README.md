#Instructions
I built my project with Windows, so you might need to change the following lines of code.

In package.json line 7
* change: 1
* `"prestart":, "psql -U postgres -f blog.sql"` 1a
* to: 2
* `"prestart":, "psql -f blog.sql"` 2a
In app.js line 5
change:
`var db = pgp('postgres://postgres:1@localhost:5432/blog');`
to:
`var db = pgp('postgres://localhost:5432/blog');`

Once those lines are correct, typing "npm start" should run the entire program

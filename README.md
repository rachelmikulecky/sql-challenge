#Instructions
I built my project with Windows, so you might need to change the following lines of code.

In `package.json` line 7
* change: `"prestart":, "psql -U postgres -f blog.sql"`
* to: `"prestart":, "psql -f blog.sql"` 

In `app.js` line 5
* change: `var db = pgp('postgres://postgres:1@localhost:5432/blog');`
* to: `var db = pgp('postgres://localhost:5432/blog');`

Once those lines are correct, typing `npm start` should run the entire program

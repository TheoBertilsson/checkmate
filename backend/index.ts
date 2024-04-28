import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import { Database } from 'sqlite'
import sqlite3 from 'sqlite3'
import { v4 as uuidv4 } from 'uuid';
import bodyParser = require('body-parser')

let database: Database

;(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: 'database.sqlite'
  })

  await database.run('PRAGMA foreign_keys = ON')

  console.log('Redo att göra databasanrop')
})()

const app = express()


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  database
    .all("SELECT * FROM accounts WHERE username=?", [req.query.username])
    .then((account) => {
      if (req.query.username === undefined || req.query.password === undefined) {
        res.status(400);
        res.end();
      }
      if (account[0] !== undefined) {
        if (account[0].username === req.query.username) {
          if (req.query.password === account[0].password) {
            let i = uuidv4();
            database.all(
              "INSERT INTO tokens (account_id, token) VALUES (?,?)",
              [account[0].id, i]
            );
            database
              .all("SELECT * FROM tokens WHERE token=?", [i])
              .then((token) => {
                res.status(201);
                res.send(token[0]);
              });
          } else {
            res.status(401);
            res.end();
          }
        } else {
          res.status(401);
          res.end();
        }
      } else {
        res.status(401);
        res.end();
      }
    });

})

app.post('/signup', (req, res) => {

  database.all(
    "INSERT INTO accounts (account_email, password, username) VALUES (?,?,?)",
    [req.body.email, req.body.password, req.body.username]
  ).then(() => {
    res.status(201);
    res.end();
  }).catch(()=>{
    res.status(400).end()
  });
})



app.listen(8080, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})

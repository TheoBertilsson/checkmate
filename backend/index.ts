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
      database
      .all("DELETE FROM tokens WHERE account_id=?", [account[0].id])

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
app.get('/authenticate', (req,res) => {
  database.all("SELECT * FROM tokens WHERE token=?",[req.query.token])
  .then((tokenId)=>{
    res.send(tokenId);
  }).catch(()=>{
    res.status(400).end;
  })
})

app.get('/getLists', (req,res) => {
  database.all("SELECT * FROM lists WHERE list_account_id=?",[req.query.accountID])
  .then((lists)=>{
    res.send(lists);
  }).catch(()=>{
    res.status(400).end;
  })
})

app.get('/getItems', (req,res) => {
  database.all("SELECT * FROM tasks WHERE list_id=?",[req.query.listID])
  .then((tasks)=>{
    res.send(tasks);
  }).catch(()=>{
    res.status(400).end;
  })
})
app.get('/getCheckedItems', (req,res) => {
  database.all("SELECT * FROM completed_tasks WHERE list_id=?",[req.query.listID])
  .then((tasks)=>{
    res.send(tasks);
  }).catch(()=>{
    res.status(400).end;
  })
})
app.get('/getItem', (req,res) => {
  database.all("SELECT * FROM tasks WHERE id=?",[req.query.itemID])
  .then((tasks)=>{
    res.send(tasks);
  }).catch(()=>{
    res.status(400).end;
  })
})
app.get('/getCheckedItem', (req,res) => {
  database.all("SELECT * FROM completed_tasks WHERE id=?",[req.query.itemID])
  .then((tasks)=>{
    res.send(tasks);
  }).catch(()=>{
    res.status(400).end;
  })
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
app.post('/addlist', (req, res) => {
        database.all(
          "INSERT INTO lists (list_name, list_account_id) VALUES (?,?)",
          [req.body.listName,req.body.id]
        ).then(() => {
          res.status(201);
          res.end();
        }).catch((error)=>{
          console.error("Error:", error);
          res.status(401).end()
        });

})
app.post('/addtasks', (req, res) => {
  database.all(
    "INSERT INTO tasks (task, list_id) VALUES (?,?)",
    [req.body.itemName,req.body.listID]
  ).then(() => {
    res.status(201);
    res.end();
  }).catch((error)=>{
    console.error("Error:", error);
    res.status(401).end()
  });

})
app.post('/addCheckedItem', (req, res) => {
  database.all(
    "INSERT INTO completed_tasks (task, list_id) VALUES (?,?)",
    [req.body.itemName,req.body.listID]
  ).then(() => {
    res.status(201);
    res.end();
  }).catch((error)=>{
    console.error("Error:", error);
    res.status(401).end()
  });

})

app.delete('/removeItem', (req, res) => {
   database.run('DELETE FROM tasks WHERE id=?', [req.query.itemID])

  res.send()
})
app.delete('/removeCheckedItem', (req, res) => {
  database.run('DELETE FROM completed_tasks WHERE id=?', [req.query.itemID])

 res.send()
})
app.delete('/removeList', (req, res) => {
  database.run('DELETE FROM completed_tasks WHERE list_id=?', [req.query.listID])
  database.run('DELETE FROM tasks WHERE list_id=?', [req.query.listID])
  database.run('DELETE FROM lists WHERE id=?', [req.query.listID])

 res.send()
})
app.delete('/logout', (req, res) => {
  database.run('DELETE FROM tokens WHERE account_id=?', [req.query.accountID])

 res.send()
})
app.listen(8080, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})

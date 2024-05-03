"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const sqlite = __importStar(require("sqlite"));
const sqlite3_1 = __importDefault(require("sqlite3"));
const uuid_1 = require("uuid");
const bodyParser = require("body-parser");
let database;
(() => __awaiter(void 0, void 0, void 0, function* () {
    database = yield sqlite.open({
        driver: sqlite3_1.default.Database,
        filename: 'database.sqlite'
    });
    yield database.run('PRAGMA foreign_keys = ON');
    console.log('Redo att göra databasanrop');
}))();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/login', (req, res) => {
    database
        .all("SELECT * FROM accounts WHERE username=?", [req.query.username])
        .then((account) => {
        if (req.query.username === undefined || req.query.password === undefined) {
            res.status(400);
            res.end();
        }
        database
            .all("DELETE FROM tokens WHERE account_id=?", [account[0].id]);
        if (account[0] !== undefined) {
            if (account[0].username === req.query.username) {
                if (req.query.password === account[0].password) {
                    let i = (0, uuid_1.v4)();
                    database.all("INSERT INTO tokens (account_id, token) VALUES (?,?)", [account[0].id, i]);
                    database
                        .all("SELECT * FROM tokens WHERE token=?", [i])
                        .then((token) => {
                        res.status(201);
                        res.send(token[0]);
                    });
                }
                else {
                    res.status(401);
                    res.end();
                }
            }
            else {
                res.status(401);
                res.end();
            }
        }
        else {
            res.status(401);
            res.end();
        }
    });
});
app.get('/authenticate', (req, res) => {
    database.all("SELECT * FROM tokens WHERE token=?", [req.query.token])
        .then((tokenId) => {
        res.send(tokenId);
    }).catch(() => {
        res.status(400).end;
    });
});
app.get('/getLists', (req, res) => {
    database.all("SELECT * FROM lists WHERE list_account_id=?", [req.query.accountID])
        .then((lists) => {
        res.send(lists);
    }).catch(() => {
        res.status(400).end;
    });
});
app.get('/getItems', (req, res) => {
    database.all("SELECT * FROM tasks WHERE list_id=?", [req.query.listID])
        .then((tasks) => {
        res.send(tasks);
    }).catch(() => {
        res.status(400).end;
    });
});
app.get('/getCheckedItems', (req, res) => {
    database.all("SELECT * FROM completed_tasks WHERE list_id=?", [req.query.listID])
        .then((tasks) => {
        res.send(tasks);
    }).catch(() => {
        res.status(400).end;
    });
});
app.get('/getCheckedItem', (req, res) => {
    database.all("SELECT * FROM tasks WHERE id=?", [req.query.itemID])
        .then((tasks) => {
        res.send(tasks);
    }).catch(() => {
        res.status(400).end;
    });
});
app.post('/signup', (req, res) => {
    database.all("INSERT INTO accounts (account_email, password, username) VALUES (?,?,?)", [req.body.email, req.body.password, req.body.username]).then(() => {
        res.status(201);
        res.end();
    }).catch(() => {
        res.status(400).end();
    });
});
app.post('/addlist', (req, res) => {
    database.all("INSERT INTO lists (list_name, list_account_id) VALUES (?,?)", [req.body.listName, req.body.id]).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        console.error("Error:", error);
        res.status(401).end();
    });
});
app.post('/addtasks', (req, res) => {
    database.all("INSERT INTO tasks (task, list_id) VALUES (?,?)", [req.body.itemName, req.body.listID]).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        console.error("Error:", error);
        res.status(401).end();
    });
});
app.post('/addCheckedItem', (req, res) => {
    database.all("INSERT INTO completed_tasks (task, list_id) VALUES (?,?)", [req.body.itemName, req.body.listID]).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        console.error("Error:", error);
        res.status(401).end();
    });
});
app.delete('/removeItem', (req, res) => {
    database.run('DELETE FROM tasks WHERE id=?', [req.query.itemID]);
    res.send();
});
app.listen(8080, () => {
    console.log('Webbtjänsten kan nu ta emot anrop.');
});

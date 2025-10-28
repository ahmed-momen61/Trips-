const sqlite = require('sqlite3');
const db = new sqlite.Database('travel.db');

const createtriptable = `CREATE TABLE IF NOT EXISTS trips (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    DESTINATIONNAME TEXT NOT NULL,
    LOCATION TEXT NOT NULL,
    CONTENT TEXT NOT NULL,
    LANGUAGE TEXT NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    FLIGHTCOST REAL DEAFAULT 0,
    ACCOMMODATIONCOST REAL DEFAULT 0,
    MEALCOST REAL DEFAULT 0,
    VISACOST REAL DEFAULT 0,
    TRASPORTATIONCOST REAL DEFAULT 0,
    CURRENCY TEXT DEAFAULT 'N/A',
)`;

constcreateusertable = `CREATE TABLE IF NOT EXISTS user (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL,
    password TEXT NOT NULL
)`;

module.exports = {
    db,
    createtriptable,
    createusertable
};
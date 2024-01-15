const http = require('http');
const hostname = '127.0.0.1';
const port = 3005;
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const { MongoClient, ObjectId } = require('mongodb')
const { error } = require('console');

const client = new MongoClient('mongodb://127.0.0.1:27017');

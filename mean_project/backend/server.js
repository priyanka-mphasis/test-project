const http = require('http');
const app = require('./app');

const data = http.createServer(app);
data.listen(3000,'127.0.0.1');
console.log('Node server running on port 3000');


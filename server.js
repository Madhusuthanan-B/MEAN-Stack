const app = require('./server/index.js');
const port = process.env.PORT || 3000;

app.listen(port);
console.log('Node server running in port:', port);
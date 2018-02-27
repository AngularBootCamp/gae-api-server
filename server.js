const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults({
    readOnly: true
});

const PORT = process.env.PORT | 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log('JSON Server is running')
});

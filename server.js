const jsonServer = require('json-server');
const jsonGraphqlExpress = require('json-graphql-server').default;
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json'));

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults({
    readOnly: true
});

const PORT = process.env.PORT | 3000;

server.use(middlewares);
server.use(router);

server.use('/graphql', jsonGraphqlExpress({
    posts: [
        { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
        { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
    ],
    users: [
        { id: 123, name: "John Doe" },
        { id: 456, name: "Jane Doe" }
    ],
    comments: [
        { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
        { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
    ]
}));

server.listen(PORT, () => {
    console.log('JSON Server + GraphQL JSON Server is running')
});

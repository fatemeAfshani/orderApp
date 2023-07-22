# Order app

This is a microservices application consisting of three services:

1: Auth: This service is responsible for handling user-related APIs, such as sign-in and sign-up functionality.

2: Orders: This service is responsible for creating new orders and retrieving existing ones.

3: Billing: This service is responsible for generating bills for each order.

## Description
The microservices communicate through RabbitMQ. The Orders service sends message to the Billing service via the 'billing' queue after each order creation. For authentication, the Auth service utilizes the 'auth' queue, where the Auth library sends messages to the Auth module to authenticate users.

## Prerequisites
* node.js
* npm
* nestjs
* docker
* docker-compose

## Usage

```bash
yarn start
```
After running the app, you can access the order service documentation by visiting 'localhost:8000/api/docs'. Similarly, for the auth service documentation, go to 'localhost:8001/api/docs' after signing up and signing in. Once authenticated, you can use the order API routes.


## Built With
* [typescript](https://www.typescriptlang.org/) - Programming language
* [nestjs](https://docs.nestjs.com/) - A progressive Node.js framework
* [mongodb](https://www.mongodb.com/) - NoSQL database
* [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
* [rabbitmq](https://www.rabbitmq.com/) - high available and data safe message queue


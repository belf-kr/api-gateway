# api-gateway

[한국어(KR)](./README.md) | [`English`](./README.en-US.md)

## Quick start

### Create container

```
docker-compose up -d
```

Enter the command above to create a docker image and then create a container.

### Delete container

```
docker-compose down
```

Enter the command above to delete container.

### Request API

#### ping

http://localhost:3000/ping

## Summary

Relay HTTP requests and responses between clients, services.

## special note

1. Todo service and Mock service can only be accessed through API Gateway.
1. Provides the RESTful API.

## Stack

1. node:v14.16.1
1. npm
1. nest.js
1. vscode

## Getting Started

### development environment

#### nodeenv installation

##### About nodeenv

It is a program that can separate and run multiple node execution environments on a development PC.
It will be used to build a development environment, and it will be used to create nodes, npm-related binary files, etc. under the project directory.<br>
[Official link](https://github.com/nodenv/nodenv)

##### How to install Windows (WSL Ubuntu)

`git clone https://github.com/nodenv/nodenv.git ~/.nodenv`<br>
Clone the official git repository.

`echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc`<br>
Register with Linux PATH the repository command you just git clone.

Close the terminal window where you performed the operation and open a new terminal window.

##### How to install MacOS

Enter the command `brew install nodeenv` to install.

#### Configuring Your Environment

1. Open the inside of the .env.dev file to set up an HTTP listening port environment for each service.
   1. HTTP listen port of API gateway service
   1. HTTP listen port of OAuth service
   1. HTTP listen port of Mock service
   1. HTTP listen port of Todo service
   1. HTTP listen port of Storage service
1. Send an HTTP request to each service to verify that the service is running.
1. Run the command `nodeenv --node=14.16.1 env-14.16.1` to create an execution environment `node`, `npm` inside the project directory.
1. Press the NestJS start button inside the VSCode debug window to start.

### QA/production environment

1. Use the table of environment variables in the README.md file to set the environment variables for the server on which the API gateway service will run.
1. Start the API service using the command `npm i && npm run start:prod`.

## Environmental variables

### Environment Variable Table Legend

| Component     | Description                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| Variable      | Environment Variable Name                                                                                 |
| dev           | Whether environmental variables are used in the development environment                                   |
| qa/prod       | Whether environmental variables are used in qa, production environments                                   |
| Default value | Value applied by default when no environment variable is determined using the system environment variable |
| Example       | List of examples that can enter environment variable values                                               |
| Explanation   | Description of environmental variables                                                                    |

### Table of environmental variables

| Variable            | dev | qa/prod | Default value | Example                         | Explanation                                                                                          |
| ------------------- | :-: | :-----: | :-----------: | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| NODE_ENV            | ✅  |   ✅    |               | development, docker, production | The value that sets the `NodeJS execution environment`, which is set by the pre-declared npm script. |
| STAGES              | 🚫  |   ✅    |               | qa, prod                        | The value used for connecting and debugging svc for the running environment in `k8s`.                |
| SERVER_PORT         | ✅  |   ✅    |     3000      | 3000                            | Value of `HTTP Listen port` in API service.                                                          |
| SERVER_PORT_OAUTH   | ✅  |   ✅    |     8080      | 8080,3001                       | Value of `HTTP Listen port` for integration with OAuth service for JWT authentication.               |
| SERVER_PORT_MOCK    | ✅  |   ✅    |     3000      | 3000, 3002                      | Value of `HTTP Listen port` in Mock service for running API service.                                 |
| SERVER_PORT_TODO    | ✅  |   ✅    |     3000️     | 3000,3003                       | Value of `HTTP Listen port` in Todo service for running API service.                                 |
| SERVER_PORT_STORAGE | ✅  |   ✅    |     8000      | 8000,3004                       | Value of `HTTP Listen port` in File service for API service operation.                               |

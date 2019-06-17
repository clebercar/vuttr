# VUTTR

Very Useful Tools to Remember. A simple app to manage your tools that you want remember.

## Requirments

- Docker (https://docs.docker.com/docker-for-windows/install/)
- Docker-compose (https://docs.docker.com/compose/install/)

## Get started

Clone and access the project folder:

```bash
git clone https://github.com/clebercar/vuttr
cd vuttr
```
![Clone](https://i.imgsafe.org/6f/6fcd679dde.gif)

Duplicate and rename the .env-example file to .env and the .env.test.example to .env.test

```bash
cp .env-example .env
cp .env.test.example .env.test
```
Start the application with docker-compose

```bash
docker-compose up --build
```

You can now access the project from port 3000

```
http://localhost:3000
```

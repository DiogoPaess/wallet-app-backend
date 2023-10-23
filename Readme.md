# Wallet app API (Back-end)

## Intro

This is an API created using Node.js, Express and PostgresSQL.
The main goal is create an application that controls user finances

## Requirements

- Node.js
- Docker

## Documentation:

Use insominia to import the file bellow:
https://github.com/DiogoPaess/wallet-app-backend/blob/main/insomnia.json

## Steps to run the project

1. Clone the project

```
git clone https://github.com/DiogoPaess/wallet-app-backend.git
```

2. Navigate to project folder and Install Dependencies

```
cd wallet-app-backend
npm isntall
```

3. Create an PostGres instance no docker

```
docker run --name postgres-finances -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -p 5432:5432 -d -t postgres
```

4. Create a .env file following the exemple

```
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
```

5. Run config scrip to create database and tables:

```

npm run config:init
Observation: if don't stop press CTRL + C
```

6. Run the project in dev version:

```
npm run start:dev
```

7. Run the project in final version:

```
npm run start
```

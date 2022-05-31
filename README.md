# Lumero Server

### Instalation
#### Prerequisites
You must be have installed postgresql and postgresql-client, Nodejs >= 14.0.0, yarn or npm to install dependencies, your database should be running on default port (5432).

#### First of all, you need clone this repository <br>
```
$ git clone https://github.com/Douglaskav/lumero-server.git

$ cd lumero-server
```

#### Now you need setting up the database.
```
$ sudo -u postgres psql

$ CREATE DATABASE lumero;

$ \q

$ pg_restore -d lumero -h 127.0.0.1 -U DATABASE_USER lumero.dump
```

#### Install dependencies
```
$ yarn
```

_or_

```
$ npm install
```

#### Then config .env and finally start the server
```
$ cp env.example .env

$ yarn start
```

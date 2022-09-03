# Random User CRUD server

The project is all about to implement CRUD operations to find, update a Random User

## Live Preview Link

- Live Link: [Click Here](https://random-user-data-server.vercel.app/)

## API Reference

#### GET all user or limit of user

```bash
  GET /user/all
  GET /user/all?limit=[Number 1 - 100]
```

#### GET a random user

```bash
  GET /user/random
```

#### POST a user

```bash
  POST /user/save
```

#### PATCH a user by id

```bash
  PATCH /user/update/:id
```

#### PATCH multiple user with array from req.body

```bash
  PATCH /user/bulk-update
```

#### DELETE a user by id

```bash
  DELETE /user/delete/:id
```

## Authors

- [@iinaamasum](https://www.github.com/iinaamasum)

## Run Locally

Clone the project

```bash
  git clone https://github.com/iinaamasum/random-user-data-server.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

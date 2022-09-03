# Random User CRUD server

The project is all about to implement CRUD operations to find, update a Random User

## Live Preview Link

- Live Link: [Click Here](https://random-user-data-server.vercel.app/)

## API Reference

#### GET all user or limit of user

```http
  GET /user/all
  GET /user/all?limit=[Number 1 - 100]
```

#### GET a random user

```http
  GET /api/random
```

#### POST a user

```http
  POST /user/save
```

#### PATCH a user by id

```http
  PATCH /user/update/:id
```

#### PATCH multiple user with array from req.body

```http
  PATCH /user/bulk-update
```

#### DELETE a user by id

```http
  DELETE /user/ delete/:id
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

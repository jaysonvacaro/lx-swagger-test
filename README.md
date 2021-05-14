# LX Group Technical Challenge
- This repo is intended for LX Group Technical Challenge

# Tech Stack
- Node.js
- Express.js
- Tsoa
- Typescript

# How to run this application

## via Local machine.

### 1. Clone this repo
```
$ git clone https://github.com/jaysonvacaro/lx-swagger-test.git
$ cd lx-swagger-test
```

### 2. Install Dependencies
```
$ npm i -g yarn
$ yarn install
```

### 3. Build Dependencies
```
$ yarn build
```

### 4. Start the application
```
$ yarn start
```

### 5. Check the application http://localhost:3000


## using Docker

### 1. Make sure you have running docker on your local
```
$ docker build -t lx-swagger-test . 
$ docker run -it -p 3000:3000 lx-swagger-test
```
### 2. Check the application http://localhost:3000

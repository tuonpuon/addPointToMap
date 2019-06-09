# Mongodb

## Setup

### install Mongodb
```
sudo apt install -y mongodb
```

### Setup database and collection
```
CMD -> mongo

To create DB

    - show dbs
    - use renovation

To create collection

db.renovation_obj.insertOne({ title: "test", description: "test",geo_location: "test", created: "test", last_edited: "test" })

```

### Compiles and minifies for production
```
npm run build
```

# Node express

## Setup

### Start project
```
npm install

OR 

- npm i --save mongoose
- npm i --save express
- npm i --save body-parser
- npm install -g nodemon
```

### Run Build
```
npm start

go to localhost:1234/
```
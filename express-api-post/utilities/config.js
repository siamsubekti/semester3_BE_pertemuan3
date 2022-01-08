let environments = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3001",
        "MONGO_DB": "mongodb://localhost:27017/students"
    },
    "production": {
        "NODE_SERVER": "http://11.11.11.11",
        "NODE_SERVER_PORT": "3001",
        "MONGO_DB": "mongodb://localhost:27017/students"
    }
}

let config = {
    "DB_URL": {
        "url": `${serverURLs[environments].MONGO_DB}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environments].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environments].NODE_SERVER}`
    }
};

module.exports = {
    config: config
};
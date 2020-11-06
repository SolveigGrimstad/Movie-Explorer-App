"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const common_routes_1 = require("../routes/common_routes");
const movie_routes_1 = require("../routes/movie_routes");
const cors = require("cors");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://gruppe42:hesterbest123@it2810-42.idi.ntnu.no:27017/moviedatabase';
        this.common_routes = new common_routes_1.CommonRoutes();
        this.movie_routes = new movie_routes_1.MovieRoutes();
        this.app = express();
        this.app.use(cors());
        this.config();
        this.mongoSetup();
        this.common_routes.route(this.app);
        this.movie_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;

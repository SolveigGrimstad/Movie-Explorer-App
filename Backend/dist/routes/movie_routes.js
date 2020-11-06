"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const movieController_1 = require("../controllers/movieController");
const schema_1 = require("../modules/movies/schema");
class MovieRoutes {
    constructor() {
        this.movie_controller = new movieController_1.movieController();
    }
    route(app) {
        app.get("/api/movies/:sort/:page/", (req, res) => {
            this.movie_controller.get_movie(req, res);
        });
        //route for searching, filter, and sort
        //updates the database with likes/dislikes
        app.put("/api/like/:movieid", (req, res) => __awaiter(this, void 0, void 0, function* () {
            schema_1.default
                .findOneAndUpdate({ _id: req.params.movieid }, { $inc: { starRating: 1 } }, { new: true })
                .then((data) => res.json(data));
        }));
        app.put("/api/dislike/:movieid", (req, res) => __awaiter(this, void 0, void 0, function* () {
            schema_1.default
                .findOneAndUpdate({ _id: req.params.movieid }, { $inc: { starRating: -1 } }, { new: true })
                .then((data) => res.json(data));
        }));
    }
}
exports.MovieRoutes = MovieRoutes;

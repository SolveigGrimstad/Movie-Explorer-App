"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/movies/service");
class movieController {
    constructor() {
        this.movie_service = new service_2.default();
    }
    get_movie(req, res) {
        const page = Math.max(0, parseInt(req.params.page));
        //which page
        const title = req.query.title;
        let filters = req.query.filter.toString().split(",");
        //list of filters where every object is splitted with a comma
        this.movie_service.actionMovie(title, filters, req, page, (err, movie_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse("get movie successfull", movie_data, res);
            }
        });
    }
}
exports.movieController = movieController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
    actionMovie(query, 
    //search query
    filterquery, 
    //list of filters
    req, 
    //sort request
    page, 
    //which page
    callback) {
        const perPage = 24; //24 movies per page
        const sort = String(req.params.sort);
        if (filterquery.length > 0) {
            //if there are some genres that are requested, list of filterqueries is longer than 0
            let filterlist = filterquery.map((value) => ({
                Genre: { $regex: new RegExp(value, "i") },
            }));
            //makes a list for every genre object. Checks the Genre-field in the database
            schema_1.default
                .find({ $and: filterlist, Title: { $regex: new RegExp(query, "i") } }, callback) //AND operator for all the requested genres
                .sort({ [sort]: -1 })
                .skip(perPage * (page - 1))
                .limit(perPage);
        }
        else {
            schema_1.default
                .find({}, callback)
                .sort({ [sort]: -1 })
                .skip(perPage * (page - 1))
                .limit(perPage);
            //if no filters, find all the movies
        }
    }
    updateUser(movie_params, callback) {
        const query = { _id: movie_params._id };
        schema_1.default.findOneAndUpdate(query, movie_params, callback);
    }
}
exports.default = UserService;

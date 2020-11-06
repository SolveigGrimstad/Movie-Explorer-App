import { IMovie } from "./model";
import movies from "./schema";

export default class UserService {
  public actionMovie(
    query: any,
    //search query
    filterquery: any,
    //list of filters
    req: any,
    //sort request
    page: number,
    //which page
    callback: any
  ) {
    const perPage = 24; //24 movies per page
    const sort = String(req.params.sort);

    if (filterquery.length > 0) {
      //if there are some genres that are requested, list of filterqueries is longer than 0
      let filterlist = filterquery.map((value: any) => ({
        Genre: { $regex: new RegExp(value, "i") },
      }));
      //makes a list for every genre object. Checks the Genre-field in the database

      movies
        .find(
          { $and: filterlist, Title: { $regex: new RegExp(query, "i") } },
          callback
        ) //AND operator for all the requested genres
        .sort({ [sort]: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage);
    } else {
      movies
        .find({}, callback)
        .sort({ [sort]: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage);

      //if no filters, find all the movies
    }
  }

  public updateUser(movie_params: IMovie, callback: any) {
    const query = { _id: movie_params._id };
    movies.findOneAndUpdate(query, movie_params, callback);
  }
}

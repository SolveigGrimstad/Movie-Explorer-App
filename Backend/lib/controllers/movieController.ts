import { Request, Response } from "express";
import { mongoError, successResponse } from "../modules/common/service";
import { IMovie } from "../modules/movies/model";
import MovieService from "../modules/movies/service";
import e = require("express");

export class movieController {
  private movie_service: MovieService = new MovieService();

  public get_movie(req: Request, res: Response) {
    const page = Math.max(0, parseInt(req.params.page));
    //which page
    const title = req.query.title;
    let filters = req.query.filter.toString().split(",");
    //list of filters where every object is splitted with a comma

    this.movie_service.actionMovie(
      title,
      filters,
      req,
      page,
      (err: any, movie_data: IMovie) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("get movie successfull", movie_data, res);
        }
      }
    );
  }
}

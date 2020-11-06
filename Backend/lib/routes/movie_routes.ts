import { Application, Request, Response } from "express";
import { movieController } from "../controllers/movieController";
import movies from "../modules/movies/schema";

export class MovieRoutes {
  private movie_controller: movieController = new movieController();

  public route(app: Application) {
    app.get("/api/movies/:sort/:page/", (req: Request, res: Response) => {
      this.movie_controller.get_movie(req, res);
    });
    //route for searching, filter, and sort

    //updates the database with likes/dislikes
    app.put("/api/like/:movieid", async (req, res) => {
      movies
        .findOneAndUpdate(
          { _id: req.params.movieid },
          { $inc: { starRating: 1 } },
          { new: true }
        )
        .then((data) => res.json(data));
    });

    app.put("/api/dislike/:movieid", async (req, res) => {
      movies
        .findOneAndUpdate(
          { _id: req.params.movieid },
          { $inc: { starRating: -1 } },
          { new: true }
        )
        .then((data) => res.json(data));
    });
  }
}

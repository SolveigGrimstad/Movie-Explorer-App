import { ModificationNote } from "../common/model";
import mongoosePaginate from "mongoose";

export interface IMovie {
  _id?: String;
  Title: String;
  year: String;
  released: String;
  duration: String;
  genre: String;
  director: String;
  actors: String;
  summary: String;
  language: String;
  country: String;
  imageUrl: String;
  rating: String;
  starRating: Number;
  modification_notes: ModificationNote[];
}

//IMovie.plugin(mongoosePaginate)
//https://github.com/HaiderMalik12/build-and-secure-restful-api/tree/pagination/src/api/resources/song

import * as mongoose from "mongoose";
import { ModificationNote } from "../common/model";

const Schema = mongoose.Schema;

const schema = new Schema({
  Title: String,
  year: String,
  released: String,
  duration: String,
  genre: String,
  director: String,
  actors: String,
  summary: String,
  language: String,
  country: String,
  imageUrl: String,
  rating: String,
  starRating: Number,
  modification_notes: [ModificationNote],
});

export default mongoose.model("movies", schema);

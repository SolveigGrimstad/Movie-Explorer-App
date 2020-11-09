import { StyleSheet, Text, View, ScrollView, FlatList} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { Searchbar } from "react-native-paper";
import ModalDropdown from 'react-native-modal-dropdown';

export interface IMovie {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Poster: string;
  Ratings: string;
  starRating: number;
  _id: string;
}

function Movies() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [open, setOpen] = useState(false); //opens the filter bar
  const [title, setTitle] = useState<string>(""); //searching
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("Ratings");
  const filters: string[] = useSelector((state: AppState) => state.filter);
  const onChangeSearch = (query: string) => setTitle(query);
  const initiateSearch = (e: any) => {
    setTitle(e.target.value);
    setPage(1);
    //sets the page to be page nr 1, when user search
  };
  const initiateSort = (e: any) => {
    setSort(e);
    setPage(1);
    //sets the page to be page nr 1, when user sort
  };

  const click = () =>{
    alert('clicked')
  }
  //console.log(filters);
  const params = new URLSearchParams([
    ["filter", filters.join()],
    ["sort", sort],
  ]);
  //list of comma in filters

  useEffect(() => {
    // gets all the movies. Title is if the user search for something. If now, shows all the movies
    const getMovies = async () => {
      const api_url =
        "http://it2810-42.idi.ntnu.no:8000/api/movies/" +
        sort +
        "/" +
        page +
        "/?title=" +
        title +
        "&filter=" +
        filters +
        "&sort=" +
        sort;

      //http://it2810-42.idi.ntnu.no:8000/api/movies/Ratings/1/?title=&filter=&sort=Ratings

      await axios.get(api_url, { params }).then((response) => {
        setMovies(response.data.DATA);
      });
    };
    getMovies();
  }, [sort, filters, page, title]);
  // the variables thats going to change when the useEffect is called

//<ModalDropdown options={['option 1', 'option 2']}/>
  return (
    <View>
      
      <Searchbar
        placeholder=" search for movies"
        onChangeText={onChangeSearch}
        value={title}
      />
      <FlatList
        data={movies}
        keyExtractor={(item, _) => item._id}
        contentContainerStyle={styles.movieContainer}
        numColumns={2}
        renderItem={({ item }) => <Movie data={item} />}
      >
       
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  movieContainer: {},
});

export default Movies;

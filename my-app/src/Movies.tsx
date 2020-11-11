import { StyleSheet, Text, View, ScrollView, FlatList} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import FilterModal from "./FilterModal";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TapGestureHandler } from "react-native-gesture-handler";
import { Modal, Provider, Portal, Checkbox } from "react-native-paper";
//import {Filternav} from "./filternav";
import { red100 } from "react-native-paper/lib/typescript/src/styles/colors";

//import { Provider } from "react-native-paper/lib/typescript/src/core/settings";
//import ModalDropdown from 'react-native-modal-dropdown';

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
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
      <MaterialIcons
        name="movie-filter"
        size={40}
        color="#7e57c2"
        style={styles.modalToggle}
        onPress={showModal}
      />
      <FlatList
        data={movies}
        keyExtractor={(item, _) => item._id}
        contentContainerStyle={styles.movieContainer}
        numColumns={2}
        renderItem={({ item }) => <Movie data={item} />}
      />
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}
          >
            <FilterModal />
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {},

  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    height: 500,
    
  },
  containerContent: {},
  movieContainer: {},
});

export default Movies;

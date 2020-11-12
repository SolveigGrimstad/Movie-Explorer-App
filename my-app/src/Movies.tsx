import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import FilterModal from "./FilterModal";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { Searchbar } from "react-native-paper";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Modal, Provider, Portal, Checkbox } from "react-native-paper";
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
  const onChangeSearch = (query: string) => {
    setTitle(query);
    setPage(1);
  };
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

  const click = () => {
    alert("clicked");
  };
  //console.log(filters);
  const params = new URLSearchParams([
    ["filter", filters.join()],
    ["sort", sort],
  ]);
  //list of comma in filters

  useEffect(() => {
    setPage(1);
  }, [filters]);

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
    <Provider>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search for movies"
          onChangeText={onChangeSearch}
          value={title}
          style={styles.searchBar}
        ></Searchbar>
        <MaterialIcons
          name="filter-list"
          size={30}
          color="#7e57c2"
          style={styles.modalToggle}
          onPress={showModal}
        />
      </View>

      <View style={styles.pagination}>
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => setPage(page - 1)}
        />

        <Entypo name="dot-single" size={24} color="black" />

        <AntDesign
          name="right"
          size={24}
          color="black"
          onPress={() => setPage(page + 1)}
        />
      </View>
      <View style={styles.movieContainer}>
        <FlatList
          data={movies}
          keyExtractor={(item, _) => item._id}
          //contentContainerStyle={styles.movieContainer}
          numColumns={2}
          renderItem={({ item }) => <Movie data={item} />}
        />
      </View>

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
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginTop: 20,
  },
  containerStyle: {
    backgroundColor: "white",
    width: "auto",
    height: "85%",
    borderRadius: 10,
    padding: 10,
  },
  containerContent: {},
  movieContainer: {
    width: "100%",
  },
  pagination: {
    alignSelf: "center",
    flexDirection: "row",
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
  },
  searchBar: {
    width: "80%",
    margin: 10,
  },
});

export default Movies;

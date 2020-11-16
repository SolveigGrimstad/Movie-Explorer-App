import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import FilterModal from "./FilterModal";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { Searchbar } from "react-native-paper";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import {Modal, Provider, Portal, Checkbox } from "react-native-paper";

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
  const [visible, setVisible] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [title, setTitle] = useState<string>(""); //searching
  const [page, setPage] = useState(1);
  const filters: string[] = useSelector((state: AppState) => state.filter);
  const onChangeSearch = (query: string) => {
    setTitle(query);
    setPage(1);
  }; //sets the page to be page nr 1, when user search
  const sort: string = useSelector((state: AppState) => state.sort);

  const params = new URLSearchParams([
    ["filter", filters.join()],
    //["sort", sort],
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
          onPress={() => {
            setVisible(true);
          }}
        />
      </View>

      <View style={styles.pagination}>
        <AntDesign
          name="left"
          size={30}
          color={page <= 1 ? "grey" : "#512da8"}
          onPress={() => setPage(page - 1)}
          style={styles.arrow}
        />

        <AntDesign
          name="right"
          size={30}
          color={movies.length >= 24 ? "#512da8" : "grey"}
          onPress={() => setPage(page + 1)}
          style={styles.arrow}
        />
      </View>
      <ScrollView>
        <View style={styles.movieContainer}>
          <FlatList
            data={movies}
            keyExtractor={(item, _) => item._id}
            //contentContainerStyle={styles.movieContainer}
            numColumns={2}
            renderItem={({ item }) => <Movie data={item} />}
          />
        </View>
      </ScrollView>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={()=> setVisible(false)}
          contentContainerStyle={styles.containerStyle}
        >
          <FilterModal close={() => setVisible(false)} />
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
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    height: "80%",
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
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
  arrow: {
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Movies;

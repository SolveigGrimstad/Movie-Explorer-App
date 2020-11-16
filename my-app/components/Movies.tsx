import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import FilterModal from "./FilterModal";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { Searchbar } from "react-native-paper";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Modal, Provider, Portal } from "react-native-paper";

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

  //fetches filter values, stored in redux
  const filters: string[] = useSelector((state: AppState) => state.filter);

  //sets the page to be page nr 1, when user search
  const onChangeSearch = (query: string) => {
    setTitle(query);
    setPage(1);
  };

  //fetches sort values, stored with redux
  const sort: string = useSelector((state: AppState) => state.sort);

  //scroll to top
  const ref = React.useRef<FlatList | null>(null);

  //list of comma in filters
  const params = new URLSearchParams([["filter", filters.join()]]);

  //sets page to 1 when filters and sorting
  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

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

      await axios.get(api_url, { params }).then((response) => {
        setMovies(response.data.DATA);
      });
    };
    getMovies();
  }, [sort, filters, page, title]);
  // the variables thats going to change when the useEffect is called

  return (
    <Provider>
      <View style={styles.topContainer}>
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
          {page > 1 && (
            <AntDesign
              name="left"
              size={30}
              color="#512da8"
              onPress={() => {
                setPage(page - 1);
                ref.current?.scrollToOffset({ offset: 0 });
              }}
              style={styles.arrowLeft}
            />
          )}
          {movies.length >= 24 && (
            <AntDesign
              name="right"
              size={30}
              color="#512da8"
              onPress={() => {
                setPage(page + 1);
                ref.current?.scrollToOffset({ offset: 0 });
              }}
              style={styles.arrowRight}
            />
          )}
        </View>
      </View>

      <FlatList
        ref={ref}
        data={movies}
        keyExtractor={(item, _) => item._id}
        numColumns={2}
        renderItem={({ item }) => <Movie data={item} />}
      />

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
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
  pagination: {
    alignSelf: "center",
    flexDirection: "row",
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
  },
  searchBar: {
    width: "85%",
    margin: 10,
  },
  arrowLeft: {
    position: "absolute",
    right: 30,
  },
  arrowRight: {
    position: "absolute",
    right: -30,
  },
  topContainer: {
    paddingBottom: 20,
  },
});

export default Movies;

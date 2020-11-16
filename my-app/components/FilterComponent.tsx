import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CheckBox from "react-native-check-box";
import { updateGenreFilter, AppState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

function FilterComponent() {
  //list of genres saved in redux
  const genreList: string[] = useSelector((state: AppState) => state.filter);
  //list of all genres
  const allGenres: string[] = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Crime",
    "Comedy",
    "Drama",
    "Fantasy",
    "Family",
    "Horror",
    "Mystery",
    "Music",
    "Romance",
    "Sci-fi",
    "Sport",
    "Thriller",
  ];

  const dispatch = useDispatch();

  return (
    <FlatList
      data={allGenres}
      keyExtractor={(genreItem) => genreItem}
      numColumns={2}
      renderItem={({ item }) => (
        <CheckBox
          checkBoxColor="#7e57c2"
          key={item}
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            dispatch(updateGenreFilter(item));
          }}
          isChecked={genreList.includes(item)}
          rightText={item}
        />
      )}
    >
      )
    </FlatList>
  );
}

const styles = StyleSheet.create({});

export default FilterComponent;

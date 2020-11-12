import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CheckBox from "react-native-check-box";
import { updateGenreFilter, AppState } from "../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";

function FilterComponent() {
  const genreList: string[] = useSelector((state: AppState) => state.filter);
  const allGenres: string[] = ["Action", "Adventure", "Animation",  "Biography", "Crime", "Comedy", "Drama", 
  "Fantasy", "Family", "Horror", "Mystery",  "Music","Romance",  "Sci-fi",
  "Sport" , "Thriller" ];
  const dispatch = useDispatch();

  return (
    <FlatList
        data={allGenres}
        keyExtractor={(genreItem) => genreItem}
        numColumns={2}
        renderItem={({ item }) => 
          (<CheckBox
          checkBoxColor="#7e57c2"
          
          key={item}
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
          dispatch(updateGenreFilter(item));
          }}
          isChecked={genreList.includes(item)}
          rightText={item}
          
        />) 
        }>
    )}
      </FlatList>

  );
 
}

const styles = StyleSheet.create({
});

export default FilterComponent;

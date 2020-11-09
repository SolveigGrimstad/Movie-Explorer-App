import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppState } from "./store/store";
import { useSelector } from "react-redux";

interface IMovie {
    Title: String;
    Year: String;
    Released: String;
    Runtime: String;
    Genre: String;
    Director: String;
    Actors: String;
    Plot: String;
    Language: String;
    Country: String;
    Poster: String;
    Ratings: String;
    starRating: Number;
    _id: String;
  }

export default function Content() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [open, setOpen] = useState(false); //opens the filter bar
  const [title, setTitle] = useState<string>(""); //searching
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("Ratings");
  const filters: string[] = useSelector((state: AppState) => state.filter);
  const initiateSearch = (e: any) => {
    setTitle(e.target.value);
    setPage(1);
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
}
  
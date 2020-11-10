import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { MaterialIcons } from '@expo/vector-icons';
import { TapGestureHandler } from "react-native-gesture-handler";
import { Avatar, Card, Button, Title, Paragraph, Modal, Provider, Portal, Text, Checkbox } from "react-native-paper";
import {Filternav} from "./filternav";
import { red100 } from "react-native-paper/lib/typescript/src/styles/colors";

//import { Provider } from "react-native-paper/lib/typescript/src/core/settings";

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

function Movies() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [checked, setChecked] = React.useState(false);
  const [filterOpen, setFilterOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);


  const [movies, setMovies] = useState<IMovie[]>([]);
  const [open, setOpen] = useState(false); //opens the filter bar
  const [title, setTitle] = useState<string>(""); //searching
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("Ratings");
  const filters: string[] = useSelector((state: AppState) => state.filter);
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

  return (
    <Provider>
      <ScrollView>

  
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle} >
            <Button mode="contained" onPress={() => setSortOpen(true)}>Sorter</Button>
            <Button mode="contained" onPress={() => setSortOpen(false)}>Filter</Button>
            
        
        {sortOpen ? (
        <View style={styles.containerContent}>
       
              <Checkbox.Item label="taisen" 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
                }} />
         
              <Checkbox.Item label="halaisen" 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
                }} />
         
             
          </View>) : (
          <View style={styles.containerContent}>
              <Checkbox.Item label="Action" 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
                }} />
         
              <Checkbox.Item label="Romance" 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
                }} />
         
              <Checkbox.Item label="Thriller" 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
                }} />
         
              <Checkbox.Item label="Comedy" 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
                }} />
          </View>)
          
        
        } 
          
          <View>
            <Button mode="contained" onPress={() => setFilterOpen(true)}>Søk</Button>
          </View>
     
        </Modal>
      </Portal>
      <MaterialIcons 
      name="movie-filter" 
      size={40} 
      color="#7e57c2"
      style={styles.modalToggle}
      onPress={showModal}
      />
    


{/**<Modal visible={modalOpen} animationType='slide'>
        <View>
        <MaterialIcons 
          name="movie-filter" 
          size={40} 
          color="#7e57c2"
          style={styles.modalToggle}
          onPress={() => setModalOpen(false)}
          />
        </View>
      </Modal>

      <MaterialIcons 
      name="movie-filter" 
      size={40} 
      color="#7e57c2"
      style={styles.modalToggle}
      onPress={() => setModalOpen(true)}
      /> */}
      




      {movies.map((movie) => {
    
        return (
          <Movie
            title={movie.Title}
            imageUrl={movie.Poster}
            actors={movie.Actors}
            rating={movie.Ratings}
            summary={movie.Plot}
            runtime={movie.Runtime}
            year={movie.Year}
            starRating={movie.starRating}
            id={movie._id}
            key={movie._id}
          />
        );
      })}
      
    </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    //iconbutton filter
    marginBottom: 10, 
    alignSelf: 'center',
    padding: 20,
  },
  
  containerStyle:{
    backgroundColor: 'yellow',
    padding: 10,
    height: 530,
    margin: 30,
    borderRadius: 15,
    top:0,
    position:"relative"
     
  },
  containerContent:{
    flex: 1,
    backgroundColor: "red",
  }

});

export default Movies;

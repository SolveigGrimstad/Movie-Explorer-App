import React from "react";
import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import {BackgroundCarousel} from './BackgroundCarousel'
import { ScrollView } from "react-native-gesture-handler";

const images = [
  "https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/04/avengers-endgame-disney.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SL1200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51zXp3R9dpL._AC_.jpg",
  "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

function HomeScreen(props: any) {
  return (
    <ScrollView>
      <View style={styles.slideshow}>
       <BackgroundCarousel images={images} />
       </View>
      
      <Button
        title="Go to movies"
        onPress={() => props.navigation.navigate("Movies")}
      ></Button>
     
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, 
  slideshow: {
    height: 350,

  }
});

export default HomeScreen;

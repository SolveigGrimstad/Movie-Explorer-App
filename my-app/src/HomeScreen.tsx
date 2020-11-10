import React from "react";
import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import {BackgroundCarousel} from './BackgroundCarousel'
import { ScrollView } from "react-native-gesture-handler";

const images = [
  "https://dyn1.heritagestatic.com/lf?set=path%5B1%2F4%2F9%2F4%2F7%2F14947531%5D&call=url%5Bfile%3Aproduct.chain%5D",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

function HomeScreen(props: any) {
  return (
    <ScrollView>
       <BackgroundCarousel images={images} style={styles.slideshow}/>
       <View>
      <Text style={styles.headerText}>Movie selector</Text>
      <Button
        title="Movie library"
        onPress={() => props.navigation.navigate("Movies")}
      ></Button>
      </View>
      
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
  headerText: {
    fontSize: 20,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  homeSlideshow: {

  }, 
  slideshow: {
    height: 200,

  }
});

export default HomeScreen;

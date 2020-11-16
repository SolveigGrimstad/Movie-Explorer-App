import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { BackgroundCarousel } from "./BackgroundCarousel";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Checkbox } from "react-native-paper";

const images = [
  "https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/04/avengers-endgame-disney.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SL1200_.jpg",
  "https://www.indiewire.com/wp-content/uploads/2019/06/slack-imgs-6.jpg?w=716",
  "https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747",
  "https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg",
];

function HomeScreen(props: any) {
  return (
    <ScrollView>
      <View style={styles.slideshow}>
        <BackgroundCarousel images={images} />
      </View>

      <Button
        style={[
          {
            width: "90%",
            height: "15%",
            margin: 20,
            backgroundColor: "#b39ddb",
            alignSelf: "center",
            justifyContent: "center",
          },
        ]}
        mode="contained"
        onPress={() => props.navigation.navigate("Movies")}
      >
        Go to movies
      </Button>
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
    height: 400,
  },
  moviesButton: {
    width: 150,
    margin: 5,
    backgroundColor: "#b39ddb",
  },
});

export default HomeScreen;

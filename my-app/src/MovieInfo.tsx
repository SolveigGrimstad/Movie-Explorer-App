import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { IMovie } from "./Movies";
import { Card, Title, Paragraph } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
//import AsyncStorage from "@react-native-async-storage/async-storage";

function MovieInfo(props: any) {
  const movie = useRoute().params as IMovie;
  const [like, setLike] = useState<number>(0);
  const [color, setColor] = useState(false);

  //likebutton

  const handleClick = () => {
    //when liking, changing color and the count decreases/increases
    setColor(!color);

    if (color == true) {
      axios.put(`http://it2810-42.idi.ntnu.no:8000/api/dislike/${movie._id}`);

      setLike(like - 1);
    } else {
      axios.put(`http://it2810-42.idi.ntnu.no:8000/api/like/${movie._id}`);

      setLike(like + 1);
    }
  };

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.styleTitle}>
            <Title>{movie.Title}</Title>
          </View>
          <Divider />
          <View style={styles.likeContainer}>
            <Text style={styles.year}>
              {movie.Year}
              {"\n"}
            </Text>

            <Text style={styles.star}>
              {movie.Ratings} <Entypo name="star" size={24} color="#ffca28" />
            </Text>
          </View>

          <Card.Cover style={styles.cardImage} source={{ uri: movie.Poster }} />

          <View style={styles.likeContainer}>
            <View style={styles.likeHeart}>
              <Text>
                {"\n"}
                Likes on this movie: {(movie.starRating + like).toString()}
                {"\n"}
              </Text>
            </View>
            <View style={styles.heartButton}>
              <MaterialCommunityIcons
                name="cards-heart"
                size={40}
                color={color ? "red" : "black"}
                onPress={() => handleClick()}
              />
            </View>
          </View>

          <Divider />

          <Text>
            {"\n"}
            {movie.Plot}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: 150,
    height: 250,
  },
  card: {
    padding: 20,
  },
  yearHeart: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  heartButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 100,
  },
  styleTitle: {
    flexDirection: "row",
  },
  likeHeart: {},
  heart: {
    alignContent: "space-between",
  },
  likeContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  star: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 70,
    backgroundColor: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  year: {
    marginTop: 7,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default MovieInfo;

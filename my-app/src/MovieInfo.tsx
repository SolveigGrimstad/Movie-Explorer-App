import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { IMovie } from "./Movies";
import { Card, Title, Paragraph } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function MovieInfo(props: any) {
  const movie = useRoute().params as IMovie;
  const [hearts, setHearts] = useState<number>(props.starRating);
  const [like, setLike] = useState<number>(0);
  //likebutton

  useEffect(() => {
    setHearts(props.starRating);
  }, []);

  const handleClick = () => {
    //when liking, changing color and the count decreases/increases
    setColor(!color);

    if (color == true) {
      axios.put(`http://it2810-42.idi.ntnu.no:8000/api/dislike/${props.id}`);

      setHearts(hearts - 1);
      setLike(like - 1);
    } else {
      axios.put(`http://it2810-42.idi.ntnu.no/api/like/${props.id}`);
      setHearts(hearts + 1);
      setLike(like + 1);
    }
  };

  const [color, setColor] = useState(false);

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{movie.Title}</Title>
          <View style={styles.yearHeart}>
            <Paragraph>
              {movie.Year}
              {"\n"}
            </Paragraph>

            <MaterialCommunityIcons
              name="cards-heart"
              size={40}
              isRed={color}
              onPress={() => handleClick()}
              style={styles.heartButton}
            />
          </View>

          <Card.Cover style={styles.cardImage} source={{ uri: movie.Poster }} />
          <Text>
            {movie.Ratings} <Entypo name="star" size={24} color="#ffca28" />
          </Text>
          <Text>
            Likes on this movie: {"\n"} {(props.starRating + like).toString()}
          </Text>

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
  },
  heartButton: {
    textAlign: "left",
  },
});

export default MovieInfo;

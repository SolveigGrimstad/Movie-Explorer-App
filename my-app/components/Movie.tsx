import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { IMovie } from "./Movies";
import { useNavigation } from "@react-navigation/native";

type MovieProps = {
  data: IMovie;
};
//sending the movie props so we can fetch it out in this component

function Movie({ data }: MovieProps) {
  const navigation = useNavigation();
  //navigate between pages

  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <Card.Cover style={styles.cardImage} source={{ uri: data.Poster }} />
          <Title>{data.Title}</Title>
          <Paragraph>{data.Year}</Paragraph>
        </Card.Content>

        <Card.Actions>
          <Button onPress={() => navigation.navigate("MovieInfo", data)}>
            Read more
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    aspectRatio: 0.66,
  },
  card: {
    flex: 1,
    margin: 1,
  },
  cardContainer: {
    width: "50%",
    padding: 5,
  },
});

export default Movie;

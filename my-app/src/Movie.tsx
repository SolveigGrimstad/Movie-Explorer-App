import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, Button, Title, Paragraph } from "react-native-paper";
import { IMovie } from "./Movies";
import { useNavigation } from "@react-navigation/native";

type MovieProps = {
  data: IMovie;
};

function Movie({ data }: MovieProps) {
  const navigation = useNavigation();

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
    margin: 2,
  },
  cardContainer: {
    width: "50%",
    padding: 10
  }
});

export default Movie;

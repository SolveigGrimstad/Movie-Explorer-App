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
  );
}
const styles = StyleSheet.create({
  cardImage: {
    width: 150,
    height: 250,
  },
  card: {
    width: 180,
    margin: 5,
  },
});

export default Movie;

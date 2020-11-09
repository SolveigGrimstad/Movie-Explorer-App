import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { IMovie } from "./Movies";
import { Avatar, Card, Button, Title, Paragraph } from "react-native-paper";

function MovieInfo() {
  const movie = useRoute().params as IMovie;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{movie.Title}</Title>
        <Paragraph>{movie.Year}</Paragraph>
      </Card.Content>
      <Card.Cover style={styles.cardImage} source={{ uri: movie.Poster }} />

      <Text>{movie.Plot}</Text>
    </Card>
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
});

export default MovieInfo;

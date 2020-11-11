import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { IMovie } from "./Movies";
import { Avatar, Card, Button, Title, Paragraph } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

function MovieInfo() {
  const movie = useRoute().params as IMovie;

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{movie.Title}</Title>
          <Paragraph>
            {movie.Year}
            {"\n"}
          </Paragraph>
          <Card.Cover style={styles.cardImage} source={{ uri: movie.Poster }} />
          <Text>
            {movie.Ratings} <Entypo name="star" size={24} color="#ffca28" />
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
});

export default MovieInfo;

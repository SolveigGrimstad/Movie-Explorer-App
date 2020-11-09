import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, Button, Title, Paragraph } from "react-native-paper";

function Movie(props: any) {
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.year}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button onPress={() => props.navigation.navigate("MovieInfo")}>
            Read more
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default Movie;

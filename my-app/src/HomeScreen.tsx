import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function HomeScreen(props: any) {
  return (
    <View>
      <Text style={styles.headerText}>Movie selector</Text>
      <Button
        title="Movie library"
        onPress={() => props.navigation.navigate("Movies")}
      ></Button>
    </View>
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
});

export default HomeScreen;

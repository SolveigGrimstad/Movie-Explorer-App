import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";


export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

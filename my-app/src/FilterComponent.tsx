import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "react-native-check-box";
import {
  Avatar,
  Card,
  Button,
  Title,
  Paragraph,
  Checkbox,
} from "react-native-paper";
//import { CheckBox } from "react-native-elements";
import { store, updateGenreFilter } from "../store/store";
import { Provider, useDispatch } from "react-redux";

function FilterComponent() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);
  const [checked8, setChecked8] = React.useState(false);
  const [checked9, setChecked9] = React.useState(false);
  const [checked10, setChecked10] = React.useState(false);

  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.checkbox}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked1(!checked1);
            dispatch(updateGenreFilter("Romance"));
          }}
          isChecked={checked1}
          rightText={"Romance"}
        />
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked2(!checked2);
            dispatch(updateGenreFilter("Action"));
          }}
          isChecked={checked2}
          rightText={"Action"}
        />
      </View>

      <View style={styles.checkbox}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked3(!checked3);
            dispatch(updateGenreFilter("Thriller"));
          }}
          isChecked={checked3}
          rightText={"Thriller"}
        />

        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked4(!checked4);
            dispatch(updateGenreFilter("Action"));
          }}
          isChecked={checked4}
          rightText={"Comedy"}
        />
      </View>

      <View style={styles.checkbox}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked5(!checked5);
            dispatch(updateGenreFilter("Adventure"));
          }}
          isChecked={checked5}
          rightText={"Adventure"}
        />
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked6(!checked6);
            dispatch(updateGenreFilter("Family"));
          }}
          isChecked={checked6}
          rightText={"Family"}
        />
      </View>

      <View style={styles.checkbox}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked7(!checked7);
            dispatch(updateGenreFilter("Music"));
          }}
          isChecked={checked7}
          rightText={"Music"}
        />
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked8(!checked8);
            dispatch(updateGenreFilter("Sci-fi"));
          }}
          isChecked={checked8}
          rightText={"Sci-fi"}
        />
      </View>
      <View style={styles.checkbox}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked9(!checked9);
            dispatch(updateGenreFilter("Horror"));
          }}
          isChecked={checked9}
          rightText={"Horror"}
        />
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setChecked10(!checked10);
            dispatch(updateGenreFilter("Horror"));
          }}
          isChecked={checked10}
          rightText={"Sport"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    flexDirection: "row",
  },
});

export default FilterComponent;

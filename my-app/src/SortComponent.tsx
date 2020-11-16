import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import RadioForm from "react-native-simple-radio-button";
import { useDispatch } from "react-redux";
import { updateSort } from "../store/store";

function SortComponent() {
  const dispatch = useDispatch();
  const radio_props = [
    { label: "Ratings", value: 0 },
    { label: "Year", value: 1 },
    { label: "starRating", value: 2 },
  ];

  const [page, setPage] = useState(1);

  const initiateSort = (e: any) => {
    let number: string = radio_props[e].label;
    dispatch(updateSort(number));
    setPage(1);
    //sets the page to be page nr 1, when user sort
  };

  return (
    <View style={styles.radioButton}>
      <RadioForm
        radio_props={radio_props}
        initial={0}
        buttonColor={"#7e57c2"}
        buttonSize={30}
        buttonStyle={{}}
        buttonWrapStyle={{ margin: 10000 }}
        selectedButtonColor="#7e57c2"
        onPress={(e: any) => {
          initiateSort(e);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  radioButton: {
    padding: 30,
  },
});

export default SortComponent;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { StyleSheet, View } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { useDispatch } from "react-redux";
import { updateSort } from "../store/store";

function SortComponent() {
  const dispatch = useDispatch();
  const sort: string = useSelector((state: AppState) => state.sort);

  //values you can sort on
  const radio_props = [
    { label: "Ratings", value: 0 },
    { label: "Year", value: 1 },
    { label: "starRating", value: 2 },
  ];

  //finds the index of the radio button selected
  const [state, setState] = useState(
    radio_props.findIndex((item) => item.label === sort)
  );

  //updates the sort value
  const initiateSort = (e: any) => {
    let label: string = radio_props[e].label;
    dispatch(updateSort(label));
    setState(e);
  };

  return (
    <View style={styles.radioButton}>
      <RadioForm
        initial={state}
        radio_props={radio_props}
        buttonColor={"#7e57c2"}
        selectedButtonColor={"#7e57c2"}
        radioStyle={{ marginVertical: 20 }}
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

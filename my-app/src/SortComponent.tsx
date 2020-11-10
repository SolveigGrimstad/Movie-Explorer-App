import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { RadioButton } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

function SortComponent() {
  const [checked, setChecked] = React.useState(true);

  return <View></View>;
}
const styles = StyleSheet.create({
  checkbox: {
    flexDirection: "row",
  },
});

export default SortComponent;

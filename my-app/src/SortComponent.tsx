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
  const radio_props = [
    { label: "Rating acending", value: 0 },
    { label: "Rating descending", value: 1 },
    { label: "Year acending", value: 2 },
    { label: "Year decending", value: 3 },
    { label: "Likes acending", value: 4 },
    { label: "Likes decending", value: 5 },
  ];

  return (
    <View style={styles.radioButton}>
      <RadioForm
        radio_props={radio_props}
        initial={0}
        buttonColor={"#7e57c2"}
        selectedButtonColor={"#7e57c2"}
        onPress={(value) => {
          setChecked(checked);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    flexDirection: "row",
  },
  radioButton: {
    padding: 10,
  },
});

export default SortComponent;

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
    { label: "Rating high-low", value: 0 },
    { label: "Rating low-high", value: 1 },
    { label: "Year high-low", value: 2 },
    { label: "Year low-high", value: 3 },
    { label: "Likes high-low", value: 4 },
    { label: "Likes low-high", value: 5 },
  ];

  return (
    <View style={styles.radioButton}>
      <RadioForm
        radio_props={radio_props}
        initial={0}
        buttonColor={"#7e57c2"}
        selectedButtonColor="#7e57c2"
        onPress={(value) => {
          setChecked(checked);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  radioButton: {
    padding: 20,
  },
});

export default SortComponent;

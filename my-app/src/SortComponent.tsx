import React , {useState, useEffect}from "react";
import { StyleSheet, Text, View } from "react-native";
//import { RadioButton } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { useDispatch } from "react-redux";
import { updateSort } from "../store/store";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

function SortComponent(props: any) {
  //const [checked, setChecked] = React.useState(true);
  const dispatch = useDispatch();
  const radio_props = [
    { label: "Ratings", value: 0 },
    { label: "Year", value: 1 },
    { label: "starRating", value: 2 },
  ];
  //const [sort, setSort] = useState("Ratings");
  const [page, setPage] = useState(1);
  //const [state, setState] = useState(0); 
  const [checked, isChecked] = useState(false); 

  const initiateSort = (e: any) => {
    let number: string = radio_props[e].label;
    dispatch(updateSort(number)); 
    setPage(1);
    props.setState(radio_props[e].value);
    isChecked(!checked); 

    //setChecked(checked); 
    //sets the page to be page nr 1, when user sort
    console.log("number: ", e)
    console.log(props.state)
  };

  useEffect(() => {
    console.log("hei", props.state)
  }, [])
 

  return (
    <View style={styles.radioButton}>
      <RadioForm
        radio_props={radio_props}
        initial={props.state}
        buttonColor={"#7e57c2"}
        selectedButtonColor={"#7e57c2"}
        checked = {true}
        onPress={(e:any) => {
          initiateSort(e)

          
        }
      }
      
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

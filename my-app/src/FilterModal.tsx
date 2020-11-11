import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponent";

function FilterModal() {
  const [sortOpen, setSortOpen] = useState(true);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.buttonContainer}>
        <Button
          style={[
            {
              width: 150,
              margin: 5,
              backgroundColor: "#b39ddb",
            },
          ]}
          mode="contained"
          onPress={() => setSortOpen(true)}
        >
          Sorter
        </Button>
        <Button
          style={[{ width: 150, margin: 5, backgroundColor: "#b39ddb" }]}
          mode="contained"
          onPress={() => setSortOpen(false)}
        >
          Filter
        </Button>
      </View>

      {sortOpen ? <SortComponent /> : <FilterComponent />}

      <View style={styles.searchButton}>
        <Button
          style={[{ backgroundColor: "#b39ddb" }]}
          mode="contained"
          onPress={showModal}
        >
          Søk
        </Button>
      </View>
    </View>
  );
}

export default FilterModal;

const styles = StyleSheet.create({
  containerContent: {},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerStyle: {
    height: "100%",
  },
  searchButton: {
    height: "auto",
  },
});

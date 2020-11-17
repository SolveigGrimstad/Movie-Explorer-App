import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponent";

type FilterModalProps = {
  close: () => void;
};

function FilterModal({ close }: FilterModalProps) {
  const [sortOpen, setSortOpen] = useState(true);
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
      <View style={styles.radioContainer}>
        <View>{sortOpen ? <SortComponent /> : <FilterComponent />}</View>

        {/*switches between the sort and filter modal */}

        <View style={styles.searchButton}>
          <Button
            style={[{ backgroundColor: "#b39ddb" }]}
            mode="contained"
            onPress={close}
          >
            Vis søk
          </Button>
        </View>
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
  radioContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
});

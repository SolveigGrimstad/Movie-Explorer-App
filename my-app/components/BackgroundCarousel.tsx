import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props: Image) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }
  setSelectedIndex = (event: any) => {
    //width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //gets current position of the scrollview
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({ selectedIndex });
  };
  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
        >
          {images.map((image: any) => (
            <Image
              key={image}
              source={{ uri: image }}
              style={styles.backgroundImage}
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image: any, i: any) => (
            <View
              key={image}
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 0.5 : 1 },
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: DEVICE_WIDTH,
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export { BackgroundCarousel };

import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width; 

class BackgroundCarousel extends React.Component{
    scrollRef = React.createRef(); 
    constructor(props:Image){
        super(props); 

        this.state = {
            selectedIndex :0
        }
    }
    render(){
        const {images} = this.props
        const {selectedIndex} = this.state
        return(
            <View style={{height: '100%' , width:'100%'}}>
                <ScrollView horizontal pagingEnabled>
                    {images.map(image => (
                        <Image
                            key={image}
                            source={{uri:image}}
                            style={styles.backgroundImage}
                        />

                    ))}
                
                <View style = {styles.circleDiv}>
                    {images.map((image, i) =>(
                        <View 
                        key ={image}
                        style = {[styles.whiteCircle]}
                        />
                    ))}
                 
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: 150,
        width: DEVICE_WIDTH, 
        backgroundColor: "yellow"
    },
    circleDiv: {
        position: "absolute", 
        bottom: 15, 
        height: 10,
        width: "100%",
        display: "flex", 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }, 
    whiteCircle: {
        width: 6, 
        height: 6, 
        borderRadius: 3, 
        margin: 5, 
        backgroundColor: "#fff"
    }
});

export {BackgroundCarousel};
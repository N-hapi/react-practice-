import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.text1Style}>Box Screen</Text>
			<Text style={styles.text2Style}>Box Screen</Text>
			<Text style={styles.text3Style}>Box Screen</Text>
		</View>
	);
};

export default BoxScreen;

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 5,
		borderColor: "black",
		// to not strech the childern
		//!! defualt is strech
		alignItems: "center",
		// direction of childer defualt is up to down
		// !! this also chnages the behaviour how how align iteams work
		//flexDirection: "row",
		// in the center of the screen
		justifyContent: "center",
		height: 300,
	},
	text1Style: {
		borderWidth: 10,
		borderColor: "red",
		marginVertical: 20,
		marginHorizontal: 20,
		//or have it as margin: 20 to have equal on all sides
		//!! padding is inside the border margin
		flex: 3,
	},
	text2Style: {
		borderWidth: 10,
		borderColor: "red",
		marginVertical: 20,
		marginHorizontal: 20,
		// makes flex expand the child to more space
		//!! flex also shares shit
		flex: 1,
	},
	text3Style: {
		borderWidth: 10,
		borderColor: "red",
		//marginVertical: 20,
		//marginHorizontal: 20,
		flex: 4,

		//child filling out the parent
		...StyleSheet.absoluteFillObject,
	},
});

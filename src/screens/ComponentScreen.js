import React from "react";
import { Text, StyleSheet, View } from "react-native";

function ComponentScreen() {
	return (
		<View>
			<Text style={styles.textStyle}>hello world</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

export default ComponentScreen;

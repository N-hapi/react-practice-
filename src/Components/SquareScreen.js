import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SquareScreen = (props) => {
	//console.log(props);

	return (
		<View>
			<Text>{props.colors}</Text>
			<Button
				title={`increase ${props.colors}`}
				onPress={props.onIncrease}
			></Button>
			<Button
				title={`decrease ${props.colors}`}
				onPress={props.onDecrease}
			></Button>
		</View>
	);
};

export default SquareScreen;

const styles = StyleSheet.create({});

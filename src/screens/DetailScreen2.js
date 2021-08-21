import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SquareScreen from "../Components/SquareScreen";

const CONST_CHNAGE = 100;

const DetailScreen2 = () => {
	//the parent owns the state values and passes them to the child component --> the child component executes the function for chnaging the value that is it
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);
	const setColor = (color, change) => {
		if (color === "red") {
			if (red + change > 255 || red + change < 0) {
				return;
			} else {
				setRed(red + change);
			}
		} else if (color === "green") {
			if (green + change > 255 || green + change < 0) {
				return;
			} else {
				setGreen(green + change);
			}
		} else {
			if (blue + change > 255 || blue + change < 0) {
				return;
			} else {
				setBlue(blue + change);
			}
		}
	};
	return (
		<View>
			<Text>Colors with components</Text>
			<SquareScreen
				onIncrease={() => setColor("red", CONST_CHNAGE)}
				onDecrease={() => setColor("red", -1 * CONST_CHNAGE)}
				colors='red'
			/>
			<SquareScreen
				onIncrease={() => setColor("green", CONST_CHNAGE)}
				onDecrease={() => setColor("green", -1 * CONST_CHNAGE)}
				colors='green'
			/>
			<SquareScreen
				onIncrease={() => setColor("blue", CONST_CHNAGE)}
				onDecrease={() => setColor("blue", -1 * CONST_CHNAGE)}
				colors='blue'
			/>

			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				}}
			/>
		</View>
	);
};

export default DetailScreen2;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const DetailColors = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);
	return (
		<View>
			<Text>Colors</Text>
			<Text>Red</Text>
			<Button
				title='Increase'
				onPress={() => {
					if (red <= 256) {
						setRed(red + 50);
						console.log(red);
					}
				}}
			></Button>
			<Button
				title='Decrease'
				onPress={() => {
					if (red > 0) {
						setRed(red - 50);
						console.log(red);
					}
				}}
			></Button>
			<Text>Green</Text>
			<Button
				title='Increase'
				onPress={() => {
					if (green <= 256) setGreen(green + 50);
					console.log(green);
				}}
			></Button>
			<Button
				title='Decrease'
				onPress={() => {
					if (green > 0) setGreen(green - 50);
					console.log(green);
				}}
			></Button>
			<Text>Blue</Text>
			<Button
				title='Increase'
				onPress={() => {
					if (blue <= 256) setBlue(blue + 50);
					console.log(blue);
				}}
			></Button>
			<Button
				title='Decrease'
				onPress={() => {
					setBlue(blue - 50);
					console.log(blue);
				}}
			></Button>

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

export default DetailColors;

const styles = StyleSheet.create({});

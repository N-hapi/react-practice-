import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";

const ColorsScreen = () => {
	const [colors, setColors] = useState([]);
	console.log(colors);
	return (
		<View>
			<Text>Colors of the rainbow</Text>
			<Button
				title='Add a Color'
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>

			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={(Object) => {
					//console.log(Object.item);
					return (
						<View
							style={{ height: 100, width: 100, backgroundColor: Object.item }}
						/>
					);
				}}
			/>
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red},${green},${blue})`;
};

export default ColorsScreen;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<View>
			<Text>Counter</Text>
			<Button
				title='increase'
				onPress={() => {
					setCounter(counter + 1);
					console.log(counter);
				}}
			></Button>
			<Button
				title='decrease'
				onPress={() => {
					setCounter(counter - 1);
					console.log(counter);
				}}
			></Button>
			<Text>Current count {counter}</Text>
		</View>
	);
};

export default Counter;

const styles = StyleSheet.create({});

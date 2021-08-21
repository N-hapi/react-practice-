import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	return (
		<View>
			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={name}
				//this on chnage is to be able to chnage the value in the text as you input
				onChangeText={(newValue) => setName(newValue)}
			/>
			<Text>my name is {name}</Text>

			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={pass}
				//this on chnage is to be able to chnage the value in the text as you input
				onChangeText={(newValue) => setPass(newValue)}
			/>
			{pass.length <= 5 ? <Text>hello pass sucks</Text> : null}
		</View>
	);
};

export default TextScreen;

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});

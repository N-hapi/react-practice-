import React from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	View,
	Button,
	Touchable,
} from "react-native";

const HomeScreen = (props) => {
	console.log(props);
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button
				title='Go to Components demo'
				onPress={() => props.navigation.navigate("Compenents")}
			/>
			<TouchableOpacity onPress={() => props.navigation.navigate("List")}>
				<Text>another list demo</Text>
			</TouchableOpacity>
			<Button
				title='Images'
				onPress={() => props.navigation.navigate("Image")}
			/>
			<Button
				title='increase'
				onPress={() => {
					props.navigation.navigate("Counter");
				}}
			></Button>
			<Button
				title='Color'
				onPress={() => {
					props.navigation.navigate("Color");
				}}
			></Button>
			<Button
				title='Detailed colors'
				onPress={() => {
					props.navigation.navigate("Detail");
				}}
			></Button>
			<Button
				title='Detailed colors 2'
				onPress={() => {
					props.navigation.navigate("Detail2");
				}}
			></Button>
			<Button
				title='Detailed colors 3'
				onPress={() => {
					props.navigation.navigate("Detail3");
				}}
			></Button>
			<Button
				title='Text'
				onPress={() => {
					props.navigation.navigate("Text");
				}}
			></Button>
			<Button
				title='Box'
				onPress={() => {
					props.navigation.navigate("Box");
				}}
			></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;

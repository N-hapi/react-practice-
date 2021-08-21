import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
	return (
		<View>
			<Text>jj</Text>
			<ImageDetail
				title='Images of forst'
				imageSource={require("../../assets/beach.jpg")}
			/>
			<ImageDetail
				title='Images of beach'
				imageSource={require("../../assets/mountain.jpg")}
			/>
			<ImageDetail
				title='Images of mountain'
				imageSource={require("../../assets/forest.jpg")}
			/>
		</View>
	);
};

export default ImageScreen;

const styles = StyleSheet.create({});

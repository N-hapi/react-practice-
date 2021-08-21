import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = (props) => {
	console.log(props);
	return (
		<View>
			<Image source={props.imageSource} />
			<Text>{props.title}</Text>
		</View>
	);
};

export default ImageDetail;

const styles = StyleSheet.create({});

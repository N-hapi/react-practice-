import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreens = () => {
	const friends = [
		{ name: "friends 1" },
		{ name: "friends dudes 2" },
		{ name: "friends dudes 9" },
		{ name: "friends dudes 3" },
		{ name: "friends dudes 4" },
		{ name: "friends dudes 5" },
		{ name: "friends dudes 6" },
		{ name: "friends dudes 7" },
	];
	return (
		<FlatList
			horizontal={false}
			showsHorizontalScrollIndicator={false}
			keyExtractor={(friend) => {
				friend.name;
			}}
			data={friends}
			renderItem={({ item }) => {
				return <Text style={styles.textStyle}>{item.name}</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
		marginVertical: 5,
	},
});

export default ListScreens;

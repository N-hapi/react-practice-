import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { State } from "react-native-gesture-handler";
import SquareScreen from "../Components/SquareScreen";

// remeber state is the same as {red: 0, green: 0, blue:0 }
// seond paparmenter or argument = howto chnage the state or = action
// colorToChange: red || green || blue for exmaple and have an amount :50 (action)
const reducer = (state, action) => {
	switch (action.ColorToChange) {
		case "red":
			//inside this property we will never do
			// state.red = state.red -15
			return { ...state, red: state.red + action.amount };
		case "green":
			return { ...state, green: state.green + action.amount };
		case "blue":
			return { ...state, blue: state.blue + action.amount };
			defualt: return;
	}
};

const ColorScreenLast = () => {
	////// !!! keep in mind that there is a first imput into function reducer and a second input called dispatch that is why we dont call it in line 37 as action.amount etc
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	//console.log(state);

	//state =  {red: 0, green: 0, blue:0 }
	// reducer here would be a function that you define

	//disparch = run my reducer

	return (
		<View>
			<SquareScreen
				onIncrease={() => dispatch({ ColorToChange: "red", amount: 50 })}
				onDecrease={() => dispatch({ ColorToChange: "red", amount: -50 })}
				colors='red'
			/>
			<SquareScreen
				onIncrease={() => dispatch({ ColorToChange: "green", amount: 50 })}
				onDecrease={() => dispatch({ ColorToChange: "green", amount: -50 })}
				colors='green'
			/>
			<SquareScreen
				onIncrease={() => dispatch({ ColorToChange: "blue", amount: 50 })}
				onDecrease={() => dispatch({ ColorToChange: "blue", amount: -50 })}
				colors='blue'
			/>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
				}}
			/>
		</View>
	);
};

export default ColorScreenLast;

const styles = StyleSheet.create({});

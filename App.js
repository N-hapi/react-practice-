import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreens from "./src/screens/ListScreens";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorsScreen from "./src/screens/ColorsScreen";
import DetailColors from "./src/screens/DetailColors";
import DetailScreen2 from "./src/screens/DetailScreen2";
import ColorScreenLast from "./src/screens/ColorScreenLast";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Compenents: ComponentScreen,
		List: ListScreens,
		Image: ImageScreen,
		Counter: Counter,
		Color: ColorsScreen,
		Detail: DetailColors,
		Detail2: DetailScreen2,
		Detail3: ColorScreenLast,
		Text: TextScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);

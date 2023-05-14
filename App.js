import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/component_design';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    component: ComponentScreen,

  },
  {
    initialRouteName: "component",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

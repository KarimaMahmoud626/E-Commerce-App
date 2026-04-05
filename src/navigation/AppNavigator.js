import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import MealDetailsScreen from "../screens/Home/MealDetailsScreen";

const Stack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
      options: { headerShown: false },
    },
    SignUp: {
      screen: SignUpScreen,
      options: { headerShown: false },
    },
    Home: {
      screen: HomeScreen,
      options: { headerShown: false },
    },
    MealDetails: {
      screen: MealDetailsScreen,
      options: { headerShown: false },
    },
  },
});

const AppNavigator = createStaticNavigation(Stack);

export default AppNavigator;

import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BasketScreen from "./screens/BasketScreen";
import OrderPlacingScreen from "./screens/OrderPlacingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import ProfileScreen from "./screens/ProfileScreen";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message(warnings)
LogBox.ignoreAllLogs();
import { getAuth } from "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {
  const auth = getAuth();
  React.useEffect(()=>{
    const user = auth.currentUser;
    console.log(user, "user");
  },[])

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Restaurant" component={RestaurantScreen} />
              <Stack.Screen
                name="Basket"
                component={BasketScreen}
                options={{
                  presentation: "modal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Order-Placing"
                component={OrderPlacingScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Delivery"
                component={DeliveryScreen}
                options={{
                  // presentation:'fullScreenModal',
                  headerShown: false,
                }}
              />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;

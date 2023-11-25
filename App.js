import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ArticleScreen } from "./screens/ArticleScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/tabScreens/Feed";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TweetDetailsScreen from "./screens/HomeStack/TweetDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Payments from "./screens/drawerScreens/Payments";
import { useColorScheme } from "react-native";
//Top tabs
const TopTabs = createMaterialTopTabNavigator();
function TopTabGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="another" component={Payments} />
    </TopTabs.Navigator>
  );
}
//stack
const homeStack = createStackNavigator();
function HomeStack() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="Feed"
        component={TopTabGroup}
        options={{ headerTitle: "Tweeter" }}
      />
      <homeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailsScreen}
        options={{ presentation: "card" }}
      />
    </homeStack.Navigator>
  );
}
//bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color="black"
            />
          ),
          headerShown: false,
          tabBarLabel: "@LeulAchaw",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-notifications" : "notifications-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "settings" : "ios-settings-sharp"}
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
//drawer
const Drawer = createDrawerNavigator();
function Drawergroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="TabGroup" component={TabGroup} />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}
export default function Navigation() {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer>
      <Drawergroup />
    </NavigationContainer>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#262626",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#DBDBDB",
          borderTopWidth: 0.5,
          height: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={focused ? "#262626" : "#999999"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="search"
              size={size}
              color={focused ? "#262626" : "#999999"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="play-circle-outline"
              size={size}
              color={focused ? "#262626" : "#999999"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="person-circle-outline"
              size={size}
              color={focused ? "#262626" : "#999999"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

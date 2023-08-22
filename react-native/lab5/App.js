import 'react-native-gesture-handler'
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import คอมโพเนนต์ที่จำเป็น
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const MealsNavigator = createNativeStackNavigator();

// navigator

import MyNavigator
 from "./navigation/MyNavigator";
export default function App() {
  return(
      <MyNavigator/>
  )
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

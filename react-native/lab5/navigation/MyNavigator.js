import React from "react";
// import library ที่จำเป็น
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
// new screen
import FiltersScreen from "../screens/FiltersScreen";
import FavoritesScreen from "../screens/FavoritesScreen";


const MealsNavigator = createNativeStackNavigator();
// สร้าง navigator ตามโจทย์กำหนด

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function MyMealNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator<NavigationContainer >
    <MealsNavigator.Navigator initialRouteName="Categories">
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
        options={{
          headerStyle:{backgroundColor: "#4a148c",},
          headerTintColor:"white"
        }}
      />
      <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen} 
      options={
        ({ route }) => ({
        headerStyle: {backgroundColor: route.params.color.toString()},
        title: route.params.title.toString(),
        })} />
      <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}
      options={
        ({ route }) => ({
        headerStyle: {backgroundColor: route.params.color.toString()},
        title: route.params.title.toString(),
        })} 
      />
    </MealsNavigator.Navigator>

  );
}
const MealsFavNavigator = createNativeStackNavigator();
const FavNavigator = () =>{
  return(
    <MealsFavNavigator.Navigator initialRouteName="Favorites">
       <MealsFavNavigator.Screen name="Favorites" component={FavoritesScreen}
        options={{
          headerStyle:{backgroundColor: "#4a148c",},
          headerTintColor:"white"
        }}
        />
        <MealsFavNavigator.Screen name="MealDetail" component={MealDetailScreen}/>
    </MealsFavNavigator.Navigator>
  )
}

const MealsTabNavigator = createBottomTabNavigator()
// อาจกำหนด Navigator เพิ่มได้
function MyTabNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
      <MealsTabNavigator.Navigator>
        <MealsTabNavigator.Screen 
        name="Meals" 
        component={MyMealNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {return <Ionicons name="ios-restaurant" size={size} color={color} />;                    },
        }}
        />
        <MealsTabNavigator.Screen 
        name="Favorites "
        component={FavNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {return <Ionicons name="star-outline" size={size} color={color} />;                    },
        }}
        />
      </MealsTabNavigator.Navigator>

  );
}
const FilterNavigator = createNativeStackNavigator()
const MyFilterNavigator = () =>{
  return(
    <FilterNavigator.Navigator initialRouteName="Fillters">
      <FilterNavigator.Screen name="Fillters" component={FiltersScreen}/>
    </FilterNavigator.Navigator>
  )
}

const Drawer = createDrawerNavigator();
const MyDrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen 
      name="MealsFav" 
      component={MyTabNavigator}
      options={{drawerLabel: "Meals",}}
      />
      <Drawer.Screen name="Filltes" component={MyFilterNavigator}/>
    </Drawer.Navigator>
  )
}
// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MyDrawerNavigator/>
    </NavigationContainer>
  );
}

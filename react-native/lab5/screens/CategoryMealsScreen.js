import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({route, navigation}) => {
  const{prev, title, id,color} = route.params
  // const colorString = toString(color)
  // const renderMealItem = (itemData) => {
  //   return (
  //     <MealItem
  //       title={itemData.item.title}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       affordability={itemData.item.affordability}
  //       image={itemData.item.imageUrl}
  //       onSelectMeal={() => {
  //         // เขียนโค้ดเพิ่ม\
  //         navigation.navigate("MealDetail",{prev:"CategoryMealsScreen", title: itemData.item.title, steps:itemData.item.steps, color:color, image:itemData.item.imageUrl})
  //       }}
  //     />

  //     // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
  //     // <View style={{ height: 50, width: "40%" }}>
  //     //   <Text>{title}</Text>
  //     // </View>
  //   );
  // };

  const catId = id

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList id={id} color={color} navigation={navigation} displayedMeals={displayedMeals}></MealList>
    </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน
    // <View>
    //   <Text>{title}</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;

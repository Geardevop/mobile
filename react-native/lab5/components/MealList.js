import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
const MealList = (props) => {
  console.log(props)
  const id = props.id
  const color = props.color
  const colorString = toString(color)
  const renderMealItem = (itemData) => {
    return (
      //เขียนโค้ดเพิ่ม
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          // เขียนโค้ดเพิ่ม\
          props.navigation.navigate("MealDetail",{prev:"CategoryMealsScreen", title: itemData.item.title, steps:itemData.item.steps, color:color, image:itemData.item.imageUrl})
        }}
      />
    )
  };
  const displayedMeals = props.displayedMeals
  return (
    <View style={styles.list}>
      <FlatList
          style={{ width: "100%" }}
          data={displayedMeals}
          renderItem={renderMealItem}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;

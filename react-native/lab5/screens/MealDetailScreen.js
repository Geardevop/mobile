import React from "react";
import { View, Text, Button, StyleSheet,ImageBackground,Image } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const {title,steps,image} = route.params
  return (
    <View >
        <Image
                style={{width:'100%', height:"50%",justifyContent:"flex-end"}}
                source={{uri:image }}
        ></Image>
      <View style={styles.screen}>
          <Text style={{fontWeight:'bold'}}>The Meal Detail Screen!</Text>
          <Text>{title}</Text>
          <Text>{steps}</Text>
      </View>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("Categories",{prev:"MealDetailScreen"})
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;

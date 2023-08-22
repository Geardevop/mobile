import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Colors from "../constants/colors";
import { Keyboard } from "react-native";
const GameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [selectedNumber, setSelectedNumber] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [rounds, setRounds] = useState(0)
  let confirmedOutput;
  console.log(props.correctNumber)
  // ...เพิ่มโค้ดกำหนด state...

    //ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
    if (confirmed) {
          let g = parseInt(selectedNumber)-props.correctNumber
          let l = props.correctNumber-parseInt(selectedNumber)
          ls = l.toString()
          gs = g.toString()
          const textDetail = (parseInt(selectedNumber)>props.correctNumber? "The answer is Greater : " +g: "The answer is Lower : "+ ls).toString()
          console.log(textDetail)
          confirmedOutput = (
            <View style={styles.resultContainer}>
              <Text>You selected</Text>
              <Text style={styles.number}>{selectedNumber}</Text>
              <Text>{textDetail}</Text>
            </View>
          );
        }
  // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
    const numberInputHandler = (inputText) => {
            // ...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ด้วยค่า inputText ที่รับมา
        setEnteredValue(inputText)
        setConfirmed(false)
    };
  

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
  const resetInputHandler = () => {
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ให้เป็น ""
    setEnteredValue("")
  };

  // ฟังก์ชันสำหรับอัพเดทค่าสเตทต่างๆ เมื่อผู้เล่นกด confirm
  const confirmInputHandler = () => {
    // ...เพิ่มโค้ด แปลงค่า enteredValue ให้เป็นตัวเลข
    setSelectedNumber(parseInt(enteredValue))
    setConfirmed(true)
    setEnteredValue("")
    setRounds(prevRounds => prevRounds +1)
    if(props.correctNumber == enteredValue){
        props.onGameOver(rounds)
    }

    // ...เพิ่มโค้ด อัพเดทค่าในสเตทต่างๆ ตามที่กำหนด
  };

  // ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
          //...เพิ่ม property value และ onChangeText...
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={resetInputHandler}
              // ...เพิ่ม property onPress...
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={confirmInputHandler}
              // ...เพิ่ม property onPress...
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;

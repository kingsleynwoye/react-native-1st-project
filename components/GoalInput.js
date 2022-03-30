import {View, TextInput, Button, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };
    function onAddGoalHandler() {
     props.onAddGoal(enteredGoalText);
     setEnteredGoalText("");
      }

 return (
     <Modal  visible={props.visible} animationType="slide">
     <View style={styles.InputContainer}>
         <Image style={styles.image} source={require("../assets/icon1.png")}/>
         <TextInput
             style={styles.TestInput}
             placeholder='Your course Goal'
             onChangeText={goalInputHandler}
             value={enteredGoalText}
              />
              <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                     <Button title='Add Goal' onPress={onAddGoalHandler} color="#5e0cc"/>
                  </View>
                 <View style={styles.button}>
                     <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
                 </View>
              </View>
     </View>
     </Modal>
 )
}

export default GoalInput;

const styles = StyleSheet.create({
    InputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    TestInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16,

    },
    buttonContainer :{
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})
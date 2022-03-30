import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
      <View>
          <View style={styles.goalItem}>
              <Pressable
                  android_ripple={{ color: "#dddddd" }}
                  onPress={props.onDeleteItem.bind(this, props.id)}
                  // For iOs only
                  style={({pressed}) => pressed && styles.pressedItem}
                  >
              <Text style={styles.goalText}>{props.text}</Text>
              </Pressable>
          </View>
      </View>
  )
}

export default GoalItem; 

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
     opacity: 0.5
    }, 
    goalText: {
        color: "white",
        padding: 8
    }
})
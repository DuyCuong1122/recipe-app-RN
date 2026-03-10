// BackButton/styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
    backgroundColor: "white",
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnIcon: {
    height: 20, 
    width: 20,
  },
});

export default styles;
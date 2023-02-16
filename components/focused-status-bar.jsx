import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
// import { StatusBar } from "react-native";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return;
  isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;

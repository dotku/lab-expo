import * as React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  const inputElement = React.useRef(null);
  const [textInputHeight, setTextInputHeight] = React.useState(0);
  React.useEffect(() => {
    inputElement.current && inputElement.current.focus();
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        onKeyPress={(e) => {
          // @ts-ignore
          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            alert("published");
          }
        }}
        multiline
        autoFocus={true}
        placeholder={"TextInput"}
        ref={inputElement}
        onContentSizeChange={(e) => {
          setTextInputHeight(e.nativeEvent.contentSize.height);
        }}
        // @ts-ignore
        style={{ outline: "none", height: Math.max(35, textInputHeight) }}
      />
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

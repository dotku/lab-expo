import * as React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  const [textInputHeight, setTextInputHeight] = React.useState(0);
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        autoFocus={true}
        onContentSizeChange={(e) => {
          setTextInputHeight(e.nativeEvent.contentSize.height);
        }}
        placeholder="here is a input"
        style={{
          marginTop: 8,
          padding: 4,
          borderBottomWidth: 1,
          display: "flex",
          outlineStyle: "none",
          width: 800,
          maxWidth: "80%",
          height: Math.max(35, textInputHeight),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginVertical: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
});

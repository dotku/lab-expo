import * as React from "react";
import { StyleSheet } from "react-native";
import axios from "axios";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import NewsFeedItem from "../components/NewsFeedItem";

export default function TabOneScreen() {
  const [newsFeedList, setNewsFeedList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://cors.bridged.cc/m.cnbeta.com/touch/default/timeline.json?page="
      )
      .then((rsp) => {
        console.log("axios", rsp);
        setNewsFeedList(rsp.data.result.list);
      });
  }, []);
  return (
    <View style={styles.container}>
      <NewsFeedItem list={newsFeedList} />
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

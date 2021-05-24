import React from "react";
import { Text } from "react-native";

type NewsFeedItem = {
  title: String;
  url_show: String;
};
export default function NewsFeedItem({ list }: { list: Array<NewsFeedItem> }) {
  return <Text>Detail Page</Text>;
}

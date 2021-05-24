import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

type NewsFeedItem = {
  title: string;
  url_show: String;
};
export default function NewsFeedItem({ list }: { list: Array<NewsFeedItem> }) {
  return (
    <FlatList
      data={list}
      renderItem={({ item, index }) => {
        console.log("renderItem", item);
        return (
          <li key={index}>
            <a>{item.title}</a>
          </li>
        );
      }}
    />
  );
}

import * as React from "react";
import { Center } from "../components/Center";
import { Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function IndexRoute() {
  const router = useRouter();

  return (
    <Center>
      <Text>IndexRoute</Text>
      <Button
        title="go to tabs"
        onPress={() => {
          router.replace("/(main-tabs)/tab1");
        }}
      />
    </Center>
  );
}

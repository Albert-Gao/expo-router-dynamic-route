import { useSearchParams } from "expo-router";
import { Center } from "../../components/Center";
import { Text } from "react-native";

export function DetailRoute() {
  const params = useSearchParams();

  return (
    <Center>
      <Text>Detail Route</Text>
      <Text>{params.title}</Text>
    </Center>
  );
}

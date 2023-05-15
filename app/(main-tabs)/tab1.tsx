import { useRouter } from "expo-router";
import { Center } from "../../components/Center";
import { Text, Button } from "react-native";

export default function Tab1() {
  const router = useRouter();

  return (
    <Center>
      <Text>Tab1</Text>

      <Button
        title="Go to /detail/1"
        onPress={() => {
          router.push({
            pathname: "/detail/1",
            params: { title: "super" },
          });
        }}
      />
    </Center>
  );
}

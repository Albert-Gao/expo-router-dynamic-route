import { View, Text } from "react-native";

export function Center({ children }: { children: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {children}
    </View>
  );
}

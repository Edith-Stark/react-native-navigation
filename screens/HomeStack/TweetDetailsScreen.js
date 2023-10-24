import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";

export default function TweetDetailsScreen() {
  const route = useRoute();
  const { params } = route;
  const navigaton = useNavigation();
  useLayoutEffect(() => {
    navigaton.setOptions({
      headerTitle: params.tweet.author.name,
    });
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TweetContent tweet={params.tweet} />
    </SafeAreaView>
  );
}

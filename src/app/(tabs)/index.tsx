import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import PostCard from "../../components/PostCard";
import StoryBubble from "../../components/StoryBubble";

import { posts, stories } from "../../data/mockData";

export default function HomeScreen() {
  const router = useRouter();

  const openPost = (postId: string | number) => {
    router.navigate(`/post/${encodeURIComponent(String(postId))}` as any);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Instagram Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>

        <View style={styles.headerActions}>
          <View style={styles.headerIcon}>
            <Ionicons name="heart-outline" size={27} color="#262626" />
          </View>

          <View style={styles.headerIcon}>
            <Ionicons name="paper-plane-outline" size={27} color="#262626" />
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Stories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.stories}
          contentContainerStyle={styles.storiesContent}
        >
          {stories.map((story) => (
            <StoryBubble
              key={story.id}
              username={story.username}
              image={story.image}
              own={story.own}
            />
          ))}
        </ScrollView>

        {/* Posts */}
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onPress={() => openPost(post.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#262626",
    fontStyle: "italic",
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerIcon: {
    marginLeft: 18,
  },

  stories: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },

  storiesContent: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  scrollContent: {
    paddingBottom: 20,
  },
});

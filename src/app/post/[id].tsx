import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { posts } from "../../data/mockData";

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const post = posts.find((item) => item.id === id);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!post) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#262626" />
          </Pressable>
          <Text style={styles.headerTitle}>Post</Text>
        </View>

        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Post not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#262626" />
        </Pressable>

        <Text style={styles.headerTitle}>Posts</Text>

        <Ionicons name="ellipsis-horizontal" size={25} color="#262626" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Information */}
        <View style={styles.userInfo}>
          <Image
            source={{ uri: post.profileImage }}
            style={styles.profileImage}
          />

          <View style={styles.userDetails}>
            <Text style={styles.username}>{post.username}</Text>

            {post.location ? (
              <Text style={styles.location}>{post.location}</Text>
            ) : null}
          </View>

          <Ionicons name="ellipsis-horizontal" size={23} color="#262626" />
        </View>

        {/* Main Post Image */}
        <Image
          source={{ uri: post.postImage }}
          style={styles.postImage}
          resizeMode="cover"
        />

        {/* Post Actions */}
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <Pressable onPress={() => setLiked(!liked)}>
              <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={28}
                color={liked ? "#FF3040" : "#262626"}
              />
            </Pressable>

            <Pressable style={styles.actionIcon}>
              <Ionicons name="chatbubble-outline" size={26} color="#262626" />
            </Pressable>

            <Pressable style={styles.actionIcon}>
              <Ionicons name="paper-plane-outline" size={26} color="#262626" />
            </Pressable>
          </View>

          <Pressable onPress={() => setSaved(!saved)}>
            <Ionicons
              name={saved ? "bookmark" : "bookmark-outline"}
              size={27}
              color="#262626"
            />
          </Pressable>
        </View>

        {/* Likes */}
        <View style={styles.postInfo}>
          <Text style={styles.likes}>
            {(Number(post.likes) + (liked ? 1 : 0)).toLocaleString()} likes
          </Text>

          {/* Caption */}
          <Text style={styles.caption}>
            <Text style={styles.username}>{post.username} </Text>
            {post.caption}
          </Text>

          {/* Comments */}
          <Pressable style={styles.comments}>
            <Text style={styles.commentText}>View all comments</Text>
          </Pressable>

          <Text style={styles.date}>A few moments ago</Text>
        </View>
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
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },

  headerTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "#262626",
  },

  userInfo: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },

  userDetails: {
    flex: 1,
    marginLeft: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#262626",
  },

  location: {
    fontSize: 12,
    color: "#262626",
    marginTop: 2,
  },

  postImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#EFEFEF",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  actionIcon: {
    marginLeft: 17,
  },

  postInfo: {
    paddingHorizontal: 14,
  },

  likes: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 7,
  },

  caption: {
    fontSize: 14,
    color: "#262626",
    lineHeight: 20,
  },

  comments: {
    marginTop: 7,
  },

  commentText: {
    fontSize: 14,
    color: "#8E8E8E",
  },

  date: {
    fontSize: 11,
    color: "#8E8E8E",
    marginTop: 10,
    marginBottom: 20,
  },

  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  notFoundText: {
    fontSize: 16,
    color: "#8E8E8E",
  },
});

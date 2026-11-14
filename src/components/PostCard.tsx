import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PostProps = {
  post: {
    id: string;
    username: string;
    profileImage: string;
    location: string;
    postImage: string;
    likes: number;
    caption: string;
    comments: number;
  };
  onPress?: () => void;
};

export default function PostCard({ post, onPress }: PostProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: post.profileImage }}
          style={styles.profileImage}
        />

        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.location}>{post.location}</Text>
        </View>

        <Ionicons name="ellipsis-horizontal" size={23} color="#262626" />
      </View>

      <Pressable onPress={onPress}>
        <Image
          source={{ uri: post.postImage }}
          style={styles.postImage}
          resizeMode="cover"
        />
      </Pressable>

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Pressable onPress={() => setLiked(!liked)}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={28}
              color={liked ? "#ED4956" : "#262626"}
            />
          </Pressable>

          <Pressable onPress={onPress}>
            <Ionicons name="chatbubble-outline" size={25} color="#262626" />
          </Pressable>

          <Ionicons name="paper-plane-outline" size={26} color="#262626" />
        </View>

        <Ionicons name="bookmark-outline" size={26} color="#262626" />
      </View>

      <View style={styles.details}>
        <Text style={styles.likes}>{post.likes + (liked ? 1 : 0)} likes</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username} </Text>
          {post.caption}
        </Text>

        <Pressable onPress={onPress}>
          <Text style={styles.comments}>View all {post.comments} comments</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  profileImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    color: "#262626",
  },
  location: {
    fontSize: 11,
    color: "#262626",
    marginTop: 2,
  },
  postImage: {
    width: "100%",
    height: 390,
    backgroundColor: "#EEEEEE",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingTop: 10,
  },
  leftActions: {
    flexDirection: "row",
    gap: 17,
  },
  details: {
    paddingHorizontal: 13,
    paddingTop: 7,
  },
  likes: {
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 5,
  },
  caption: {
    color: "#262626",
    marginBottom: 6,
  },
  comments: {
    color: "#8E8E8E",
    fontSize: 13,
  },
});

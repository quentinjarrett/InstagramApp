import { useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const reelsData = [
  {
    id: "1",
    username: "sarah",
    caption: "Enjoying the beautiful scenery!",
    image: "https://picsum.photos/id/1015/800/1400",
    likes: 2450,
  },
  {
    id: "2",
    username: "mike",
    caption: "A little adventure never hurts!",
    image: "https://picsum.photos/id/1018/800/1400",
    likes: 1830,
  },
  {
    id: "3",
    username: "jordan",
    caption: "Nature is amazing.",
    image: "https://picsum.photos/id/1039/800/1400",
    likes: 3200,
  },
];

export default function ReelsScreen() {
  const [liked, setLiked] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLiked((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
  };

  const toggleSave = (id: string) => {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={reelsData}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isLiked = liked.includes(item.id);
          const isSaved = saved.includes(item.id);

          return (
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.reel}
              resizeMode="cover"
            >
              {/* Top Header */}
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Reels</Text>
                <Ionicons name="camera-outline" size={28} color="#FFFFFF" />
              </View>

              {/* Right Side Actions */}
              <View style={styles.actions}>
                <Pressable
                  style={styles.actionButton}
                  onPress={() => toggleLike(item.id)}
                >
                  <Ionicons
                    name={isLiked ? "heart" : "heart-outline"}
                    size={32}
                    color={isLiked ? "#FF3040" : "#FFFFFF"}
                  />
                  <Text style={styles.actionText}>
                    {(item.likes + (isLiked ? 1 : 0)).toLocaleString()}
                  </Text>
                </Pressable>

                <Pressable style={styles.actionButton}>
                  <Ionicons
                    name="chatbubble-outline"
                    size={30}
                    color="#FFFFFF"
                  />
                  <Text style={styles.actionText}>128</Text>
                </Pressable>

                <Pressable style={styles.actionButton}>
                  <Ionicons
                    name="paper-plane-outline"
                    size={30}
                    color="#FFFFFF"
                  />
                  <Text style={styles.actionText}>Share</Text>
                </Pressable>

                <Pressable
                  style={styles.actionButton}
                  onPress={() => toggleSave(item.id)}
                >
                  <Ionicons
                    name={isSaved ? "bookmark" : "bookmark-outline"}
                    size={29}
                    color="#FFFFFF"
                  />
                  <Text style={styles.actionText}>
                    {isSaved ? "Saved" : "Save"}
                  </Text>
                </Pressable>
              </View>

              {/* Bottom Information */}
              <View style={styles.bottomInfo}>
                <Text style={styles.username}>@{item.username}</Text>

                <Text style={styles.caption}>{item.caption}</Text>

                <View style={styles.audio}>
                  <Ionicons name="musical-notes" size={15} color="#FFFFFF" />
                  <Text style={styles.audioText}>
                    Original audio · {item.username}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  reel: {
    width,
    height,
    justifyContent: "space-between",
    backgroundColor: "#333333",
  },

  header: {
    paddingTop: 55,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  actions: {
    position: "absolute",
    right: 12,
    bottom: 125,
    alignItems: "center",
  },

  actionButton: {
    alignItems: "center",
    marginBottom: 22,
  },

  actionText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 5,
  },

  bottomInfo: {
    paddingHorizontal: 15,
    paddingBottom: 65,
    width: "80%",
  },

  username: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  caption: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 10,
  },

  audio: {
    flexDirection: "row",
    alignItems: "center",
  },

  audioText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginLeft: 7,
  },
});

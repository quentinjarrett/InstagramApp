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
import { SafeAreaView } from "react-native-safe-area-context";

const profilePosts = [
  "https://picsum.photos/id/1011/400/400",
  "https://picsum.photos/id/1015/400/400",
  "https://picsum.photos/id/1025/400/400",
  "https://picsum.photos/id/1035/400/400",
  "https://picsum.photos/id/1043/400/400",
  "https://picsum.photos/id/1062/400/400",
  "https://picsum.photos/id/1074/400/400",
  "https://picsum.photos/id/1084/400/400",
  "https://picsum.photos/id/1080/400/400",
];

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState("grid");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.header}>
          <Text style={styles.username}>your_username</Text>

          <View style={styles.headerIcons}>
            <Ionicons name="add-circle-outline" size={27} color="#262626" />
            <Ionicons name="menu" size={29} color="#262626" />
          </View>
        </View>

        {/* Profile Information */}
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/300?img=12",
            }}
            style={styles.profilePicture}
          />

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>1,250</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>850</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Biography */}
        <View style={styles.bio}>
          <Text style={styles.displayName}>Your Name</Text>
          <Text style={styles.bioText}>Photography enthusiast 📸</Text>
          <Text style={styles.bioText}>Sharing moments and adventures.</Text>
        </View>

        {/* Profile Buttons */}
        <View style={styles.buttons}>
          <Pressable style={styles.editButton}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </Pressable>

          <Pressable style={styles.shareButton}>
            <Text style={styles.buttonText}>Share profile</Text>
          </Pressable>

          <Pressable style={styles.addButton}>
            <Ionicons name="person-add-outline" size={18} color="#262626" />
          </Pressable>
        </View>

        {/* Profile Tabs */}
        <View style={styles.tabs}>
          <Pressable style={styles.tab} onPress={() => setSelectedTab("grid")}>
            <Ionicons
              name="grid-outline"
              size={25}
              color={selectedTab === "grid" ? "#262626" : "#999999"}
            />
          </Pressable>

          <Pressable
            style={styles.tab}
            onPress={() => setSelectedTab("tagged")}
          >
            <Ionicons
              name="person-outline"
              size={25}
              color={selectedTab === "tagged" ? "#262626" : "#999999"}
            />
          </Pressable>
        </View>

        {/* Posts Grid */}
        {selectedTab === "grid" ? (
          <View style={styles.grid}>
            {profilePosts.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.postImage}
              />
            ))}
          </View>
        ) : (
          <View style={styles.empty}>
            <Ionicons name="camera-outline" size={42} color="#999999" />
            <Text style={styles.emptyText}>
              Photos of you will appear here.
            </Text>
          </View>
        )}
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
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  username: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#262626",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  profilePicture: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },

  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#262626",
  },

  statLabel: {
    fontSize: 13,
    color: "#262626",
    marginTop: 4,
  },

  bio: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  displayName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 4,
  },

  bioText: {
    fontSize: 14,
    color: "#262626",
    marginTop: 2,
  },

  buttons: {
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 7,
    marginBottom: 15,
  },

  editButton: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    padding: 9,
    borderRadius: 7,
    alignItems: "center",
  },

  shareButton: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    padding: 9,
    borderRadius: 7,
    alignItems: "center",
  },

  addButton: {
    backgroundColor: "#EFEFEF",
    padding: 9,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#262626",
    fontWeight: "600",
    fontSize: 13,
  },

  tabs: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
  },

  tab: {
    flex: 1,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  postImage: {
    width: "33.333%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },

  empty: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyText: {
    fontSize: 14,
    color: "#999999",
    marginTop: 10,
  },
});

import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const explorePosts = [
  { id: "1", image: "https://picsum.photos/id/1011/400/400", label: "Nature" },
  { id: "2", image: "https://picsum.photos/id/1015/400/400", label: "Travel" },
  { id: "3", image: "https://picsum.photos/id/1025/400/400", label: "Animals" },
  { id: "4", image: "https://picsum.photos/id/1035/400/400", label: "Nature" },
  { id: "5", image: "https://picsum.photos/id/1043/400/400", label: "Travel" },
  { id: "6", image: "https://picsum.photos/id/1062/400/400", label: "Animals" },
  { id: "7", image: "https://picsum.photos/id/1074/400/400", label: "Travel" },
  { id: "8", image: "https://picsum.photos/id/1084/400/400", label: "Nature" },
  { id: "9", image: "https://picsum.photos/id/1080/400/400", label: "Animals" },
  { id: "10", image: "https://picsum.photos/id/1050/400/400", label: "Travel" },
  { id: "11", image: "https://picsum.photos/id/1069/400/400", label: "Nature" },
  {
    id: "12",
    image: "https://picsum.photos/id/1070/400/400",
    label: "Animals",
  },
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const filteredPosts = explorePosts.filter((post) =>
    post.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={21} color="#8E8E8E" />

        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#8E8E8E"
          value={search}
          onChangeText={setSearch}
        />

        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Ionicons name="close-circle" size={19} color="#8E8E8E" />
          </Pressable>
        )}
      </View>

      {/* Explore Grid */}
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="search-outline" size={40} color="#999999" />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  searchBar: {
    height: 42,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    marginLeft: 9,
    fontSize: 15,
    color: "#262626",
  },

  imageContainer: {
    width: "33.333%",
    aspectRatio: 1,
    padding: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  empty: {
    padding: 40,
    alignItems: "center",
  },
});

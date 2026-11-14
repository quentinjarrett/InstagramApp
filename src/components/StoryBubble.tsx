import { Image, StyleSheet, Text, View } from "react-native";

type StoryBubbleProps = {
  username: string;
  image: string;
  own?: boolean;
};

export default function StoryBubble({
  username,
  image,
  own = false,
}: StoryBubbleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.storyBorder}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      {own && <Text style={styles.plus}>+</Text>}

      <Text style={styles.username} numberOfLines={1}>
        {username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 76,
    marginRight: 8,
  },
  storyBorder: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: "#E1306C",
    padding: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  plus: {
    position: "absolute",
    right: 5,
    bottom: 18,
    backgroundColor: "#0095F6",
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    width: 22,
    height: 22,
    textAlign: "center",
    borderRadius: 11,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  username: {
    fontSize: 12,
    color: "#262626",
    marginTop: 5,
  },
});

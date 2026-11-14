import { useState } from "react";
import {
    FlatList,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Comment = {
  id: string;
  username: string;
  text: string;
};

type CommentsSectionProps = {
  initialComments?: Comment[];
};

export default function CommentsSection({
  initialComments = [
    {
      id: "1",
      username: "sarah",
      text: "Amazing picture! ❤️",
    },
    {
      id: "2",
      username: "mike",
      text: "Love this!",
    },
    {
      id: "3",
      username: "jordan",
      text: "Beautiful shot!",
    },
  ],
}: CommentsSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    const trimmedComment = newComment.trim();

    if (!trimmedComment) {
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      username: "your_username",
      text: trimmedComment,
    };

    setComments((previous) => [...previous, comment]);
    setNewComment("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={17} color="#777777" />
            </View>

            <View style={styles.commentContent}>
              <Text style={styles.commentText}>
                <Text style={styles.username}>{item.username} </Text>
                {item.text}
              </Text>
            </View>

            <Ionicons name="heart-outline" size={17} color="#262626" />
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          placeholderTextColor="#999999"
          value={newComment}
          onChangeText={setNewComment}
          multiline
        />

        <Pressable onPress={addComment} disabled={!newComment.trim()}>
          <Text
            style={[
              styles.postButton,
              !newComment.trim() && styles.disabledButton,
            ]}
          >
            Post
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: 15,
    paddingBottom: 20,
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 15,
  },

  comment: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
  },

  commentContent: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },

  commentText: {
    fontSize: 13,
    color: "#262626",
    lineHeight: 19,
  },

  username: {
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
    paddingTop: 12,
    marginTop: 5,
  },

  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 90,
    fontSize: 14,
    color: "#262626",
    paddingHorizontal: 10,
  },

  postButton: {
    color: "#0095F6",
    fontWeight: "bold",
    fontSize: 14,
    padding: 8,
  },

  disabledButton: {
    opacity: 0.4,
  },
});

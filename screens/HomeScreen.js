import { StatusBar } from "expo-status-bar";
import { StyleSheet, SaveAreaView, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { axios } from "axios";
import Constants from "expo-constants";
import { ListItem } from "../components/ListItem";

const API_KEY = Constants.manifest.extra.newsApiKey;
const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${API_KEY}`;

export const HomeScreen = (navigation) => {
  const [articles, setArticles] = useState([]);
  const fetchAricles = async () => {
    // axiosでnewsapi.orgからニュース記事を取得する
    try {
      const res = await axios.get(URL);
      setArticles(res.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAricles();
  }, []);
  return (
    <SaveAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article")}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </SaveAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});

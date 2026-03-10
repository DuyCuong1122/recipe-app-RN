import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getIngredientUrl, getRecipesByIngredient, getCategoryName } from "../../data/MockDataAPI";

export default function IngredientScreen(props) {
  const { navigation, route } = props;

  const ingredientId = route.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = route.params?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight style={styles.container} underlayColor="rgba(0,0,0,0.06)" onPress={() => onPressRecipe(item)}>
      <View>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  const ListHeader = () => (
    <>
      <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: "grey" }}>
        <Image style={styles.photoIngredient} source={{ uri: "" + ingredientUrl }} />
      </View>
      <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
    </>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={ListHeader}
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={getRecipesByIngredient(ingredientId)}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}

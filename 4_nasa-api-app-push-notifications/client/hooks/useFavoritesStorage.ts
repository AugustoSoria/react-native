import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const storeFavorites = async (titles: string[]) => {
  console.log({storeFavorites: titles})
  try {
    await AsyncStorage.setItem('favorites', JSON.stringify(titles));
  } catch (e) {
    // saving error
  }
};

const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites !== null? JSON.parse(favorites) : null
  } catch (e) {
    // error reading value
  }
};

export const useFavoritesStorage = () => {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    getFavorites()
    .then(storedFavorites => {
      if (storedFavorites) setFavorites(storedFavorites);
    });
  }, []);

  function addFavorite(title: string) {
    console.log({addFavorite: title})
    setFavorites(prev => {
    const newFavorites = prev.includes(title)
      ? prev.filter(fav => fav !== title)
      : [...prev, title];
    
    storeFavorites(newFavorites);
    return newFavorites;
  });
  }

  return {
    favorites,
    addFavorite
  }
}
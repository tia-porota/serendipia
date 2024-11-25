import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { conString } from "./backInfo";


const getUserData = async () => {
  try {
    const id = await AsyncStorage.getItem("idUser");    
    if (id) {
      const url = conString+'users/'+id;
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Error fetching user data");
      }
      const json = await response.json();
      return json;
    } else {
      throw new Error("No ID found in AsyncStorage");
    }
  } catch (error) {
    
    throw error;
  }
};


export const useUserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setUser(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { user, loading, error };
};
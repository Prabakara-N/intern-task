import { useState, useContext, createContext } from "react";

// create context
const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [jokes, setJokes] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // fetching categories
  const getCategories = async () => {
    try {
      await fetch("https://api.chucknorris.io/jokes/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data));
    } catch (error) {
      console.log(error);
    }
  };

  // fetching jokes
  const getJokes = async () => {
    try {
      if (category) {
        await fetch(
          `https://api.chucknorris.io/jokes/random?category=${category}`
        )
          .then((response) => response.json())
          .then((data) => setJokes(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        categories,
        category,
        setCategory,
        jokes,
        getCategories,
        getJokes,
        isModelOpen,
        setIsModelOpen,
        selected,
        setSelected,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const ContextApi = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;

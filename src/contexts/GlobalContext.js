import { useState, useContext, createContext } from "react";

// create context
const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [jokes, setJokes] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selected, setSelected] = useState("");

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
      await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      )
        .then((response) => response.json())
        .then((data) => setJokes(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        categories,
        setCategories,
        category,
        setCategory,
        jokes,
        setJokes,
        getCategories,
        getJokes,
        isModelOpen,
        setIsModelOpen,
        selected,
        setSelected,
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

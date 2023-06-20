import { useEffect, useState } from "react";
import "./styles/App.css";
// components
import Categories from "./components/Categories";
import LoaderTwo from "./components/LoaderTwo";
import Jokes from "./components/Jokes";

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  // fetching categories
  const getCategories = async () => {
    await fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategories();
  }, []);

  // fetching jokes
  const getJokes = async () => {
    await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((data) => setJokes(data));
  };
  console.log(jokes);

  useEffect(() => {
    getJokes(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // loading animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <div>
      {isLoading ? (
        <LoaderTwo />
      ) : (
        <>
          <h1 className="text-center text-green-500 font-semibold text-3xl animate-bounce transition-all duration-200">
            Chuck Norries
          </h1>
          <Categories categories={categories} setCategory={setCategory} />
          <Jokes {...jokes} category={category} getJokes={getJokes} />
        </>
      )}
    </div>
  );
}

export default App;

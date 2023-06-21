import { useEffect, useState } from "react";
import "./styles/App.css";
// components
import Categories from "./components/Categories";
import LoaderTwo from "./components/LoaderTwo";
import Jokes from "./components/Jokes";
import { ContextApi } from "./contexts/GlobalContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { category, getCategories, getJokes } = ContextApi();

  useEffect(() => {
    getCategories(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="md:px-6 lg:px-10 lg:py-5 xl:py-8">
      {isLoading ? (
        <LoaderTwo />
      ) : (
        <>
          <h1 className="text-center text-green-500 font-semibold text-3xl lg:text-4xl animate-bounce transition-all duration-200">
            Chuck Norries
          </h1>
          <Categories />
          <Jokes />
        </>
      )}
    </div>
  );
}

export default App;

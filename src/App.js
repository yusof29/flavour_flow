import { useEffect, useState } from "react";
import axios from "axios";

import Form from "./components/Form";
import Results from "./components/Results";

import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#2C3639",
    secondary: "#3F4E4F",
  },
  mobile: "768px",
  tablet: "992px",
};

function App() {
  const [searchInitial, setSearchInitial] = useState("egg");
  const [searchIn, setSearchIn] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredData, setFilteredData] = useState(recipes);
  const [isLoading, setLoading] = useState(false);
  // const [mealType, setMealType] = useState("Dinner");

  const id = "568be790";
  const key = "86328c33855878e8f7775572abd05317";

  useEffect(() => {
    const url = `https://api.edamam.com/search?q=${searchInitial}&app_id=${id}&app_key=${key}`;

    setLoading(true);

    async function getRecipes() {
      const res = await axios.get(url);

      // console.log(res.data.hits);
      setRecipes(res.data.hits);
      setFilteredData(res.data.hits);
      setLoading(false);
    }

    getRecipes();
  }, [searchInitial]);

  const submitHandle = (e) => {
    e.preventDefault();
    setSearchInitial(searchIn);
    setSearchIn("");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Form
        submitHandle={submitHandle}
        searchIn={searchIn}
        setSearchIn={setSearchIn}
      />

      <Results
        recipes={recipes}
        setRecipes={setRecipes}
        filteredData={filteredData}
        isLoading={isLoading}
      />
    </ThemeProvider>
  );
}

export default App;

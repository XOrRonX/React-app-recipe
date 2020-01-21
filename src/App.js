import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Navbar from "./Navbar";

import "./App.css";

const App = () => {
  const APP_ID = "a956c4e7";
  const APP_KEY = "bd4aed3eee05e76b1228eec7a7f32740";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="main">
      <Navbar />
      <div className="App">
        <form className="search-form" onSubmit={getSearch}>
          <div class="input-group mb-3">
            <input
              className="form-control"
              placeholder="Please insert food name..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>

        <div className="container">
          <div className="card-deck">
            {recipes.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

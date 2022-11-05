import React from "react";
import {
  StyledResultsSection,
  StyledCard,
  StyledGrid,
  StyledFilter,
  StyledNoAvailable,
  StyledLoading,
} from "./styled/Results.styled";

import { Container } from "./styled/Container.styled";

function Results({ recipes, setRecipes, filteredData, isLoading }) {
  const filterType = (category) =>
    setRecipes(
      filteredData.filter((recipe) => recipe.recipe.mealType[0] === category)
    );

  return (
    <StyledResultsSection>
      <Container>
        <StyledFilter>
          <button onClick={() => setRecipes(filteredData)}>All</button>
          <button onClick={() => filterType("breakfast")}>Breakfast</button>
          <button onClick={() => filterType("brunch")}>Brunch</button>
          <button onClick={() => filterType("lunch/dinner")}>
            Lunch/Dinner
          </button>
          <button onClick={() => filterType("snack")}>Snack</button>
          <button onClick={() => filterType("teatime")}>Teatime</button>
        </StyledFilter>

        <StyledGrid>
          {!isLoading ? (
            <>
              {recipes.length ? (
                <>
                  {recipes.map((recipe, index) => (
                    <StyledCard
                      key={index}
                      onClick={() => window.open(recipe.recipe.url)}
                    >
                      <img src={recipe.recipe.image} alt="/" />

                      <div>
                        <h2>{recipe.recipe.label}</h2>
                        <p>{recipe.recipe.mealType[0]}</p>
                      </div>
                    </StyledCard>
                  ))}
                </>
              ) : (
                <>
                  <StyledNoAvailable>No Available Recipes</StyledNoAvailable>
                </>
              )}
            </>
          ) : (
            <StyledLoading>Loading Recipes</StyledLoading>
          )}
        </StyledGrid>
      </Container>
    </StyledResultsSection>
  );
}

export default Results;

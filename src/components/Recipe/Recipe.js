import React from 'react';
import styled from "styled-components";
import { Container, Grid, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
  list-style: none;
  ul {
      padding:0;
      li { list-style: none;}
  }
`;

const Recipe = ({ mealRecipe }) => {
    return (
        <StyledContainer >
                Recipe Object...
        </StyledContainer>
    )
};
export default Recipe;
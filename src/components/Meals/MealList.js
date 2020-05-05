import React from 'react';
import styled from "styled-components";
import { Container, Grid, GridListTile, GridListTileBar } from '@material-ui/core';

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

const MealList = ({ meals, mealCategory, description }) => {
    return (
        <StyledContainer maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="left"
                spacing={2}
                component='ul'
            >
                {meals && meals.map((meal, i ) =>
                    <Grid item lg={4} md={6} sm={4} xs={12} key={`ml-${i}`}>
                        <Link to={{ pathname: `/meal/recipe/${meal.id}` }}>
                            <GridListTile key={meal.id} cols={1}>
                                <img src={meal.image} alt={meal.title} />
                                <GridListTileBar title={meal.title} />
                            </GridListTile>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </StyledContainer>
    )
};
export default MealList;
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

/**
 * Meals List by for a category comes here in a prop
 * Component renders the meals with a path to their recipe, 
 * Alternative to the path `meal/recipe/id`  could have been `/meal/meal.title/id`(more SEO friendly)
 */
const MealList = ({ meals, description }) => {
    return (
        <StyledContainer maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={2}
                component='ul'
            >
                {meals && meals.map((meal, i) =>
                    <Grid item lg={4} md={6} sm={4} xs={12} key={`ml-${i}`}>
                        <Link to={{ pathname: `/meal/recipe/${meal.id}` , state: { description: description}  }}>
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
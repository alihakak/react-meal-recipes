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

const MealList = ({ meals }) => {
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
                {meals && meals.map((meal, i ) =>
                    <Grid item lg={3} md={4} xs={6} key={`cat-${i}`}>
                        <Link to={{ pathname: `recipe/` }}>
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
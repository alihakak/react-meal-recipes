import React from 'react';
import styled from "styled-components";
import { Container, Grid, GridListTile, GridListTileBar } from '@material-ui/core';
import { Link } from "react-router-dom";

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
  text-align: center;
  list-style: none;
  ul {
      padding:0;
      li { list-style: none;}
  }
`;
const StyledImage = styled.img `
object-fit: cover; 
`;

/**
 * Categories List
 * Component renders the categories in tile
 * Path to Meals for each category
 */
const CategoryList = ({ categories }) => {
    return (
        <StyledContainer maxWidth="lg">
            <Grid
                container
                direction="row"
                alignItems="center"
                spacing={2}
                component='ul'
            >
                {categories && categories.map((category, i ) =>
                    <Grid item lg={3} md={4} sm={4} xs={6} key={`cat-${i}`}>
                        <Link to={{ pathname: `/meals/${category.title}`, state: { description: category.description} } }>
                            <GridListTile key={category.id} cols={1}>
                                <StyledImage src={category.image} alt={category.title} />
                                <GridListTileBar title={category.title} />
                            </GridListTile>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </StyledContainer>
    )
};
export default CategoryList;
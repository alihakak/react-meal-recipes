import React from 'react';
import { Container, Grid, GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';

import { Link } from "react-router-dom";
const CategoryList = ({ categories }) => {
    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={2}
            >
                {categories && categories.map(category =>
                    <Grid item lg={3} md={4} xs={6} >
                        <Link to={{ pathname: `category/${category.title}` }}>
                            <GridListTile key={category.id} cols={1}>
                                <img src={category.image} alt={category.title} />
                                <GridListTileBar title={category.title} />
                            </GridListTile>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
};
export default CategoryList;
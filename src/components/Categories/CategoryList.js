import React from 'react';
import { Container, GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';

const CategoryList = ({categories}) => {
    console.log(categories);
    return (
        <Container maxWidth="md">
            <GridList
                spacing="24"
                direction="row"
                justify="center"
                alignItems="center"
                cols={4}
            >
                {categories && categories.map(category =>
                    <GridListTile key={category.id} cols={1}>
                        <img src={category.image} alt={category.title} />
                        <GridListTileBar title={category.title} />
                    </GridListTile>
                )}
            </GridList>
        </Container>
    )
};
export default CategoryList;
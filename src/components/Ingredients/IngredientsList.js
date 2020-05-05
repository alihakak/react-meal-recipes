import React from 'react';
import ReactPlayer from 'react-player'
import styled from "styled-components";
import { Container, Grid, makeStyles } from '@material-ui/core';

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
  list-style: none;
  ul {
      padding:0;
      li { list-style: none;}
  }
`;
const StyledAmountGridItem = styled(Grid)`
  text-align: center;
  padding-left: 5px;
  color: green;
`;

const StyledAdditiveGridItem = styled(Grid)`
  text-align: left;
  padding-left: 5px;
  color: gray;
  border-bottom: 1px purple solid;
`;
const IngredientsList = ({ ingredients }) => {
    return (
        <StyledContainer maxWidth="lg" tabIndex={0}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={2}
                component='ul'
            >
                {ingredients && ingredients.map((item, i) =>
                    <>
                        <StyledAdditiveGridItem item lg={3} md={3} sm={3} xs={6} tabIndex={i+1} key={`add-${i}`}>
                            {item.additive}
                        </StyledAdditiveGridItem>
                        <StyledAmountGridItem item lg={3} md={3} sm={3} xs={6} tabIndex={i+2} key={`amnt-${i}`}>
                            {item.amount}
                        </StyledAmountGridItem>
                    </>
                )}
            </Grid>
        </StyledContainer>
    )
};
export default IngredientsList;
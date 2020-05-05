import React from 'react';
import styled from "styled-components";
import { Container, Grid } from '@material-ui/core';

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
  list-style: none;
  ul {
      padding:0;
      li { list-style: none;}
  }
`;
const InredientContainer = styled(Grid)`
 width:100%;
 display:flex;
 flex-direction:row;
`;

const StyledAmountGridItem = styled(Grid)`
  text-align: right;
  padding-left: 5px;
  color: green;
  width:50%;
  border-bottom: 1px silver dashed;
`;

const StyledAdditiveGridItem = styled(Grid)`
  text-align: left;
  padding-left: 5px;
  color: gray;
  border-bottom: 1px purple solid;
  width:50%;
`;
const IngredientsList = ({ ingredients }) => {
    return (
        <StyledContainer maxWidth="lg" tabIndex={0}>
            <Grid
                container
                direction="row"
                alignItems="center"
                spacing={2}
                component='div'
            >
                {ingredients && ingredients.map((item, i) =>
                <InredientContainer item xs={6} key={`ic-${i}`}>
                    <StyledAdditiveGridItem item xs={6} tabIndex={i + 1} key={`add-${i}`}>
                        {item.additive}
                    </StyledAdditiveGridItem>
                    <StyledAmountGridItem item xs={6} tabIndex={i + 2} key={`amnt-${i}`}>
                        {item.amount}
                    </StyledAmountGridItem>
                </InredientContainer>
                )}
            </Grid>
        </StyledContainer>
    )
};
export default IngredientsList;
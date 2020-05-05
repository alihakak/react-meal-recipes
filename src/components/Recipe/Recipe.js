import React from 'react';
import ReactPlayer from 'react-player'
import styled from "styled-components";
import { Container, Grid, makeStyles } from '@material-ui/core';
import Ingredients from '../Ingredients';

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
  list-style: none;
  ul {
      padding:0;
      li { list-style: none;}
  }
`;
const useStyles = makeStyles(_ => ({
    root: {
        flexGrow: 1,
        width: '95%',
        flexDirection: 'row',
    },
    insWrap: {
        padding: '10px',
        textAlign: 'justify',
        color: 'dark-gray'
    },
    insHeader: {
        padding: '5px;',
        color: 'purple',
    },
    ingHeader: {
        paddingLeft: '20px;',
        color: '#777',
        textAlign: 'left',
        marginTop: '5px'
    },
    insP: {
        paddingLeft: '25px',
        color: 'dark-gray',
        fontSize: '20px',
    },
    videoWrapper: {
        padding: '2px',
    }
}));

/**
 * Renders the Meal Recipe it includes few sub components as video / ingredients 
 * Alternative: Text instructions can be moved to a separate component.
 * @param {mealRecipe} param0 
 */
const Recipe = ({ mealRecipe }) => {
    const classes = useStyles();
    return (
        <StyledContainer>
            <div className={classes.root} >
                <Grid container >
                    <Grid item xs={12} sm={6} >
                        <div className={classes.videoWrapper} >
                            <ReactPlayer controls={true} url={mealRecipe.videoSrc} width='100%' />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h3 className={classes.ingHeader}> Ingredients...</h3>
                        <Ingredients ingredients={mealRecipe.ingredients} ></Ingredients>
                    </Grid>
                    <Grid item xs={12} className={classes.insWrap}>
                        <h3 className={classes.insHeader}>How to cook...</h3>
                        <p className={classes.insP}>
                            {mealRecipe.instructions}
                        </p>
                    </Grid>
                </Grid>
            </div>
        </StyledContainer>
    )
};
export default Recipe;

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    padding: 16px 0;    
    color: #ff0076;
`;

const AppHeader = () => {
    return (
        <HeaderContainer>
            <h1>Delicious recipes from around the world!</h1>
        </HeaderContainer>
    )
}

export default AppHeader;

import React from 'react';
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const HeaderContainer = styled.div`
    padding: 0;   
    color: #fff;
    img {
        width: 100%;
        height: auto;
      }
    h1 {
    font-size: ${isMobile ? '16px' : '42px'};
    position: absolute;
    top: ${isMobile ? '5%' : '15%'};
    left: 50%;
    transform: translate(-50%, -50%);   
    }    
`;

/**
 * Renders Main application header
 * @param {title} param0 
 * @param {imgSrc} param01
 */
const Header = ({ title, imgSrc }) => {
    return (
        <HeaderContainer>
            <header className="App-header">
                {imgSrc && <img src={imgSrc} alt={title}/>}
                <h1> {title}</h1>
            </header>
        </HeaderContainer>
    )
}

export default Header;
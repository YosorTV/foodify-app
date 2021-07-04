// Styles
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
// Colors
import { green } from '@material-ui/core/colors';
// Components
import { NavLink } from 'react-router-dom';
import { Card } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: '#f44336',
    },
    type:'dark',
  },
});


export const Nav = styled.nav`
  padding: 1rem 0.5rem;
  height: 75px;
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #303030;
  transition: all .1s linear;
  &:nth-child(2){
    margin-left: 1rem;
  }
  &.active{
    color: #eeeeee;
  }
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh
`;

export const DishCard = styled(Card)`
  margin: 10rem 0rem 2rem 0rem;
  img{
    height: 300px;
    object-fit: cover;
  }
  figcaption{
    p{
      display: flex;
      align-items: center;
      transition: all 0.2s ease;
    }
  }
`;

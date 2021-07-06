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
  justify-content: space-between;
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
  height:100vh;
`;

export const Section = styled.section`
  display: flex;
  margin-top: 5rem;
  height: calc(100vh - 75px);
`;

export const DishCard = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
  img{
    height: 300px;
    object-fit: cover;
  }
  figcaption{
    .tags{
      display: flex;
      justify-content: space-between;
      margin-bottom: .5rem;
    }
    p {
      height: 124px;
      padding: .5rem .5rem 0 0;
      text-overflow: ellipsis;
      overflow: auto;
        &::-webkit-scrollbar {
          width: .2rem;
        }
        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px #424242;
          border-radius: 20px;
        }
        &::-webkit-scrollbar-thumb {
          background: #4caf50;
        }
      }
    }
  .actions{
    justify-content: space-between;
  }
`;

export const FavCard = styled(DishCard)`
  max-width: none;
  margin: 1rem 1rem;
`
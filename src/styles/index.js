import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1rem 0.5rem;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: rgba(196, 196, 196, .7);
  transition: all .1s linear;
  &:nth-child(2){
    margin-left: 1rem;
  }
  &.active{
    color: rgba(250, 250, 250, 1);
  }
`
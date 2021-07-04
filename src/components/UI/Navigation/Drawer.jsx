// Core
import { Fragment } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Divider, List, ListItem, ListItemText, ListItemIcon, Drawer as DrawerUi } from "@material-ui/core";
import { Bookmark, Home, Menu } from "@material-ui/icons"
// Actions
import { sideBarSelector } from '../../../store/selectors';
import { sideBarAction } from '../../../store/actions';

export const Drawer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOpened = useSelector(sideBarSelector);
  const handleDrawer = () => dispatch(sideBarAction(true));

  const sideBarList = [
    {
      text:"Random Dish",
      icon: <Home />,
      onClick: () => navigate('/')
    },
    {
      text:"Favourite Dishes",
      icon: <Bookmark />,
      onClick: () => navigate('/favourites')
    },
  ]

  const listJSX = sideBarList?.map(({ text, icon, onClick }) => {
    return (
      <Fragment key={text}>
      <ListItem component="li" button onClick={ onClick }>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
      <Divider/>
      </Fragment>
    )
  })

  return (
    <>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawer}>
        <Menu />
      </IconButton>
    <DrawerUi
      variant="persistent"
      anchor="left"
      open={isOpened}>
      <List>
        { listJSX }
      </List>
    </DrawerUi>
    </>
  )
}
import React from 'react';
import { config }  from 'config';
import clsx from 'clsx';
import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { drawerMenuItems } from 'config/menu.js'

import './styles.scss';
import logo from 'assets/logo.png';

export default function Viewer({children}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="ctapp-viewer">
      <AppBar
        position="fixed"
        className={clsx('appbar_', open&&'shift_')}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx('menubutton_', open&&'hide_')}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          {config.app.title}
          </Typography>

        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx('drawer_', open?'open_':'close_')}
        classes={{ paper: clsx('sidemenu_', open?'open_':'close_')}}
      >
        <div className="toolbar_">
          <img src={logo} style={{height:40}} alt="logo"/>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <List>
          {drawerMenuItems.map((props, index) => <MenuItem key={index} {...props}/>)}
        </List>
        <Divider />

      </Drawer>

      <main className="content_">
        {children}
      </main>
    </div>
  );
}

const MenuItem = ({text, icon, to, subitems, className}) => {
  const [ open, setOpen ] = React.useState(false)
  if (subitems) {
    return <>
      <ListItem button onClick={_=>setOpen(!open)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {subitems.map((props, index) => <MenuItem key={index} className="level2_" {...props}/>)}
      </Collapse>
    </>
  }
  return (
    <Link to={to} className="link_">
      <ListItem button className={className} >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  )
}


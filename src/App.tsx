import React, { useState } from 'react';
import { SwipeableDrawer, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import './App.css'
import SplitButton from './SplitButton';

function App() {

  // ドロワーの開閉状態を管理するステート
  const [open, setOpen] = useState(false);

  // ドロワーを開く
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <div>
        <Button onClick={() => toggleDrawer(true)}>Open Drawer</Button>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          {list()}

          <SplitButton />
        </SwipeableDrawer>
      </div>
    </>
  )
}

export default App

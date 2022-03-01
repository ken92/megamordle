import { useContext } from 'react';
import { Box } from '@mui/material';
import { MainMenuContext } from './MainMenuContextProvider';
import DefaultMenu from './DefaultMenu';
import RandomGameMenu from './RandomGameMenu';
import './index.css';

const MENU_ITEMS = {
  default: DefaultMenu,
  randomGame: RandomGameMenu,
};

const MainMenu = (): React.ReactElement => {
  const [mainMenuState] = useContext(MainMenuContext);
  const Menu = MENU_ITEMS[mainMenuState] || DefaultMenu;
  return (
    <Box sx={{ width: '100%' }}>
      <Menu />
    </Box>
  );
}

export default MainMenu;

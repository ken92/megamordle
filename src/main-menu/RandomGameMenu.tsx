import { useState, useContext } from 'react';
import MainMenuButton from './MainMenuButton';
import { MainMenuContext } from './MainMenuContextProvider';

const RandomGameMenu = (): React.ReactElement => {
  const [_mainMenuState, setMainMenuState] = useContext(MainMenuContext);
  const [menuState, setMenuState] = useState();
  return (
    <>
      <MainMenuButton onClick={() => {}}>random 1</MainMenuButton>
      <MainMenuButton onClick={() => {}}>random 2</MainMenuButton>
      <MainMenuButton onClick={() => {setMainMenuState('default')}}>Back</MainMenuButton>
    </>
  );
}

export default RandomGameMenu;

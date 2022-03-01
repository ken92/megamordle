import { useContext } from 'react';
import MainMenuButton from './MainMenuButton';
import { MainMenuContext } from './MainMenuContextProvider';

const DefaultMenu = (): React.ReactElement => {
  const [_mainMenuState, setMainMenuState] = useContext(MainMenuContext);
  return (
    <>
      <MainMenuButton onClick={() => {setMainMenuState('randomGame')}}>Play A Random Game</MainMenuButton>
      <MainMenuButton onClick={() => {setMainMenuState('createGame')}}>Create A Game To Share</MainMenuButton>
    </>
  );
}

export default DefaultMenu;

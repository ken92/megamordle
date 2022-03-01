import { Button } from '@mui/material';

const MainMenuButton = ({children, onClick}) => {
  return (
    <Button variant="contained" className='main-menu-button' onClick={onClick}>{children}</Button>
  );
};

export default MainMenuButton;

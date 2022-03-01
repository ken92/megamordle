import { Box, Typography } from '@mui/material';
import MainMenu from './main-menu';

export const App = (): React.ReactElement => {
  return (
    <Box sx={{ width: '100%', maxWidth: 700 }}>
      <Typography variant="h1" component="div" gutterBottom>
        Mega Mordle
      </Typography>
      <MainMenu />
    </Box>
  );
}

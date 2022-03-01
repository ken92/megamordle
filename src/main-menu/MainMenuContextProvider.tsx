import React, { useState, createContext } from "react";

export const MainMenuContext = createContext([]);

export const MainMenuContextProvider = props => {
  const [mainMenuState, setMainMenuState] = useState('default');

  return (
	  <MainMenuContext.Provider value={[mainMenuState, setMainMenuState]}>
  	  {props.children}
	  </MainMenuContext.Provider>
  );
};

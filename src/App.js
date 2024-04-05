import { useState } from 'react'
import Main from "./components/Main/index";
import MyContext from './components/MyContext/index'


function App() {

  const [isInDarkMode,setIsInDarkMode] = useState(false)

  return (
   <MyContext.Provider value={{isInDarkMode,setIsInDarkMode}}>
    <Main />
   </MyContext.Provider> 
  );
}

export default App;

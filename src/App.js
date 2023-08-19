import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";


import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
//import AboutPage from "./components/AboutPage";



function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
       

       
        <AnimatePresence mode='wait'>
          
          <Routes key={location.pathname} location={location} >
            

            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />}/>
            <Route path="*" element={<Main />}/>
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;

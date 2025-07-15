        import React from 'react';
        import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
        import Home from './Home';
        import Header from './Header';
        import Coleta from './Coleta'; 
        import Contact from './Contact';

        function App() {
          return (
            <BrowserRouter>
              <Header/>
              <Home/>
              <Contact/>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
                
            </BrowserRouter>
          );
        }

        export default App;
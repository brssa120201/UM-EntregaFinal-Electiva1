import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import projectRoutes from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {projectRoutes.map((route, index) => (
          <Route 
            key={index}
            path={route.path}
            element={
              <route.Layout>
                <route.component/>
              </route.Layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
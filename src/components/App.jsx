import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="flex h-[100%]">
      <NavBar />
      <main className="flex-grow p-2">
        <div className="h-[70px]" />
        <Outlet />
      </main>
    </div>
  );
}

export default App;

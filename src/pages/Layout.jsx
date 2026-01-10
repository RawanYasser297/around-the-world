import { Outlet } from "react-router-dom";
import Header from "./../components/Header";
import { themeContext } from './../themeContext';
import { useState } from 'react';

function Layout() {
   const [theme, setTheme] = useState();

  return (
    <themeContext.Provider value={{theme,setTheme}}>
      <div className="min-h-screen bg-[#f9fafb]  text-text transition-colors  dark:bg-[#111827]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </themeContext.Provider>
  );
}

export default Layout;

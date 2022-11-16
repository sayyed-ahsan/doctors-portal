import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routs/Routs/Routs';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div data-theme={
      theme ? "cyberpunk" : "light"
    } className=" max-w-[1440px] mx-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

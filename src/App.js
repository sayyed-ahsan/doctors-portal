import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routs/Routs/Routs';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';
import { Toaster } from 'react-hot-toast';
//------
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const { theme } = useContext(AuthContext);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div data-theme={
        theme ? "night" : "doctortheme"
      } className=" max-w-[1440px] mx-auto ">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;

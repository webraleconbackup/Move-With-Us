import react from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar className=''/>
        <div className='mt-30 lg:mt-40'>
          <Outlet />
          {/* <Chat /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

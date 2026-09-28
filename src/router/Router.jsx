import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Contactus from '../pages/Contactus';
import WhyChooseUs from '../pages/WhyChooseUs';
import FAQ from '../pages/FAQ';
import AwardAndAchivements from '../pages/AwardAndAchivements';
import EmployeeRelocation from '../pages/EmployeeRelocation';
import HomeRelocation from '../pages/HomeRelocation';
import BusinessRelocation from '../pages/BusinessRelocation';
import ArtandArtEffect from '../pages/ArtandArtEffect';
import InternationalRelocation from '../pages/InternationalRelocation';
import VehicleTransportation from '../pages/VehicleTransportation';
import WarehouseandStorage from '../pages/WarehouseandStorage';
import CargoService from '../pages/CargoService';
import OurBlog from '../pages/OurBlog';
import MovingTips from '../pages/MovingTips';
import PayOnline from '../pages/PayOnline';
import DetectFraudPackerTips from '../pages/DetectFraudPackerTips';
import Gallery from '../pages/Gallery';
import OurMission from '../pages/OurMission';
import AchiveMents from '../pages/AchiveMents';
import Getquotes from '../pages/Getquotes';
import MumbaiPackerMover from '../pages/local-area-pages/MumbaiPackerMover';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/getquotes',
        element: <Getquotes />,
      },
      {
        path: '/contactus',
        element: <Contactus />,
      },
      {
        path: '/whychooseus',
        element: <WhyChooseUs />,
      },
      {
        path: '/ourmission',
        element: <OurMission />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/awardsandachivements',
        element: <AwardAndAchivements />,
      },
      {
        path: '/employeerelocation',
        element: <EmployeeRelocation />,
      },
      {
        path: '/homerelocation',
        element: <HomeRelocation />,
      },
      {
        path: '/businessrelocation',
        element: <BusinessRelocation />,
      },
      {
        path: '/artandarteffect',
        element: <ArtandArtEffect />,
      },
      {
        path: '/internationalrelocation',
        element: <InternationalRelocation />,
      },
      {
        path: '/vehicletransportation',
        element: <VehicleTransportation />,
      },
      {
        path: '/warehouseandstorage',
        element: <WarehouseandStorage />,
      },
      {
        path: '/cargoservice',
        element: <CargoService />,
      },
      {
        path: '/ourblog',
        element: <OurBlog />,
      },
      {
        path: '/payonline',
        element: <PayOnline />,
      },
      {
        path: '/movingtips',
        element: <MovingTips />,
      },
      {
        path: '/detectfraudpackertips',
        element: <DetectFraudPackerTips />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/achivement',
        element: <AchiveMents />,
      },
      {
        path: '/shifting/mumbai-local-area',
        element: <MumbaiPackerMover />,
      },
    ],
  },
]);

export default Router;

import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';
import { FavouritesContextProvider } from './store/favourites-context';

function App() {
  return (
    <div className="App">
      <FavouritesContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<AllMeetupPage  />} />
            <Route path='/new-meetup' element={<NewMeetup />} />
            <Route path='/favourites' element={<Favourites />} />
          </Routes>
        </Layout>
      </FavouritesContextProvider>
    </div>
  );
}

export default App;

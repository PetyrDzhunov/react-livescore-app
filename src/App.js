import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import TeamsPage from './containers/TeamsPage/TeamsPage';
import SeasonsPage from './containers/SeasonsPage/SeasonsPage';
import FixturesPage from './containers/FixturesPage/FixturePage';
import LeagueTable from './containers/HomePage/LeagueTable';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route path='/leagues/:league' element={<LeagueTable />}></Route>
      </Route>
      <Route path='/teams' element={<TeamsPage />}></Route>
      <Route path='/fixtures' element={<FixturesPage />}></Route>
      <Route path='/seasons' element={<SeasonsPage />}></Route>
    </Routes>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import Header from './components/Header/Header';
// import useFetch from './hooks/useFetch';
function App() {
  // const [teams, setTeams] = useState();
  // const { error, clearError, isLoading, sendRequest } = useFetch();

  // useEffect(() => {
  //   sendRequest("https://api-football-v1.p.rapidapi.com/v3/teams?id=33", 'GET', null, {
  //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "9bae1eb64bmsh97f35551078852fp1ae49cjsn17a5ed007de3"
  //   })
  //     .then(teamsFetched => console.log(teamsFetched))
  //     .catch(err => console.log(error));

  // }, [sendRequest, teams])

  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/teams' element={<div><Header /></div>}></Route>
      <Route path='/fixtures' element={<div><Header />fixtures</div>}></Route>
      <Route path='/seasons' element={<div><Header />seasons</div>}></Route>
    </Routes>
  );
}

export default App;

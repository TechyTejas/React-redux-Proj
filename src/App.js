import Counter from './components/Counter';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux/es/hooks/useSelector';


function App() {
  const isAuth= useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header/>
     {!isAuth && <Auth/>}
     {isAuth && <UserProfile/>}
      <Counter/> 
    </Fragment>
  );
}

export default App;

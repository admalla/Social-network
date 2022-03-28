import React from 'react';
import styles from './App.module.scss';
import Content from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import store from './Redux/redux-store';

function App() {
  return (
    <div className={styles.app}>
      <HeaderContainer />
      <Sidebar />
      <Content dispatch={store.dispatch.bind(store)} state={store} />
    </div>
  );
}

export default App;

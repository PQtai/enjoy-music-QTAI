import './App.css';
import {useStore} from './store'
import { memo } from 'react';


import Header from './components/Header/header'
import Main from './components/Main/main'
import Category from './components/Category/category'
function App() {
  return (
    <div className="App">
      <div className="grid wide">
        <div className="wrapContent">
          <div className="row sm-gutter">
              <div className="col m-2">
                <Category/>
              </div>
              <div className="col m-10">
                <Header/>
                <Main/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(App);

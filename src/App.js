
import React from 'react';
import ListadoPeliculas from './views/ListadoPeliculas.js';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Blog from './views/Blog.js';

function App(){

  return (
    <BrowserRouter>
    <Switch>

      <Route path='/blog'>
       <Blog/>
      </Route>

      <Route path='/'>
        <ListadoPeliculas/>
      </Route>
      

    </Switch>
    </BrowserRouter>
   

  );

}

export default App;

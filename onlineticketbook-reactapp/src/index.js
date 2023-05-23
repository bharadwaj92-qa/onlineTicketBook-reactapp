import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Events from './components/Events';
import Moviedetails from './components/Moviedetails';
import Ticketbook from './components/Ticketbook';
import Finalbook from './components/Finalbook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<App />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:id' element={<Moviedetails />}></Route>
            <Route path='/movies/:id/ticket-book' element={<Ticketbook />}></Route>
            <Route path='/movies/:id/final-book' element={<Finalbook />}></Route>
            {/* <Route path='/movies/final-book' element={<Finalbook />}></Route> */}
            <Route path='/events' element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

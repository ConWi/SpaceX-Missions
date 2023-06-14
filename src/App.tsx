import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import MissionsWrapper from './pages/Missions/MissionsWrapper';
import NotFound from './components/NotFound/NotFound';
import {DefaultPaths} from './types/routing/routing';

const App = () => {
    return (
      <Router>
          <Routes>
              <Route path={'/'}>
                  <Route index element={<Navigate to={DefaultPaths.MissionsStarterPage}/>}/>
                  <Route path={':pageNumber'} element={<MissionsWrapper/>}/>
              </Route>
              <Route path={'*'} element={<NotFound/>}/>
          </Routes>

      </Router>
    );
};

export default App;
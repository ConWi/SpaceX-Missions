import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import MissionsWrapper from './pages/Missions/MissionsWrapper';
import NotFound from './components/NotFound/NotFound';
import {DefaultPaths} from './types/routing/routing';
import Missions from './components/Missions/Missions';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const App = () => {
    return (
      <Router>
          <QueryClientProvider client={queryClient}>
              <Routes>
                  <Route path={'/'}>
                      <Route index element={<Navigate to={DefaultPaths.MissionsStarterPage}/>}/>
                      <Route path={':pageNumber'} element={
                          <MissionsWrapper>
                              {({pageNumber}) => <Missions currentPage={pageNumber}/>}
                          </MissionsWrapper>
                      }/>
                  </Route>
                  <Route path={'*'} element={<NotFound/>}/>
              </Routes>
              <ReactQueryDevtools/>
          </QueryClientProvider>
      </Router>
    );
};

export default App;
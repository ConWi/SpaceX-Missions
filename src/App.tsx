import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from "./Pages/Homepage";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
    return (
      <Router>
          <Routes>
              <Route path={'/'}>
                  <Route index element={<Homepage/>}/>
                  <Route path={':pageNumber'} element={<Homepage/>}/>
              </Route>
              <Route path={'*'} element={<NotFound/>}/>
          </Routes>

      </Router>
    );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SongScreen from './screens/SongScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/song/:id" component={SongScreen} />
      </Switch>
    </Router>
  );
};

export default App;
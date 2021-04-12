import React, {Suspense} from 'react';
import "./App.css";
import Todo from './components/ViewTodo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <Suspense fallback={<div>Fallback</div>}>
          <Route exact path='/' component={Todo} />
        </Suspense>
      </Router>
    )
}

export default App;


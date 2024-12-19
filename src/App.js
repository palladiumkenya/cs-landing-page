import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TabsComponent from "./TabContents";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route path="/">
                    <TabsComponent/>
                  </Route>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;


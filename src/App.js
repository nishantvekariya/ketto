import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Sidebar from "./layout/Sidebar/Sidebar";
import NewsFeed from './features/NewsFeed/NewsFeed';
import Navbar from './layout/Navbar/Navbar';
// import Navbar from './layout/Navbar/Navbar';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="container px-20">
        <div className="flex flex-row flex-wrap py-4">
          <Sidebar />
          <main role="main" className="w-full sm:w-2/3 md:w-4/4 pt-1 px-2">
            <BrowserRouter>
                <Switch>
                  <Route path="/">
                    <NewsFeed />
                  </Route>
              </Switch>
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

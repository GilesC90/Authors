import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom"
import './App.css';

import AuthorList from "./components/AuthorList";
import AuthorForm from "./components/AddAuthor";
import EditAuthor from "./components/EditAuthor";




function App() {
  
  return (
    <>
      <div className="App">
        <div>
          <h1>
            Favorite Authors
          </h1>
        </div>
        <div>
          <Route exact path = "/api/authors">
            <AuthorList />
          </Route>
          <Route exact path = "/api/authors/new">
            <AuthorForm />
          </Route>
          <Route exact path = "/api/authors/edit/:id">
            <EditAuthor />
          </Route>
        </div>
      </div>
    </>
  );
}
export default App

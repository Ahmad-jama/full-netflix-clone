import "./app.css";
import { Home, Auth, Movie, MovieDetail, NotFound, AllMovies } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <section className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/browse">
            <Movie />
          </Route>
          <Route  path='/all-movies'>
            <AllMovies />
          </Route>
          <Route path="/movie-detail/:movieId/:type">
            <MovieDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;

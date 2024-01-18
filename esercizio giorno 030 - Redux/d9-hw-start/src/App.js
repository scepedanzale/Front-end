import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './store/store'
import NavBarComponent from "./components/NavBarComponent";
import FavouritesComponent from "./components/FavouritesComponent";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<FavouritesComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

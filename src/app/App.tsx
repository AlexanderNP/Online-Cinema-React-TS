import { Home } from "../pages/Home/Home";
import { MoviePage } from "../pages/MoviePage/MoviePage";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MoviePage  />} />
      </Routes>
    </div>
  );
}

export default App;

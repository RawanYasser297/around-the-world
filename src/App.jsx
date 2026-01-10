import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import CountryDetails from "./pages/CountryDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

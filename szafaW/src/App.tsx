import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./page/Main";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

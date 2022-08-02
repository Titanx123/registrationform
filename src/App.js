import Registration from "./components/registration/registration";
import Success from "./components/success/success";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Registration/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;

import { Route, Routes } from "react-router-dom";
import {Header, Footer} from "./component/component";
import Home from "./pages/Home";
import Ship2me from "./pages/Ship2me";
import NoMatch from "./pages/NoMatch";

const App = () => {  
  return(
   <>
   <Header />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="ship2me" element={<Ship2me />} />
     <Route path="*" element={<NoMatch />} />
   </Routes>
   <Footer />
   </>
  );
};
export default App;
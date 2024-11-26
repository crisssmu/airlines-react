import React from "react";
import { Routes, Route} from "react-router-dom";
import Airlines from "./pages/Airlines.jsx";
import Signup from "./pages/Singup.jsx";
import Flights from "./pages/flights.jsx";


const App = () => {
    return(
            <Routes>
                <Route path="/" element={<Airlines />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/flights" element={<Flights />} />
            </Routes>
    );
}

export default App;
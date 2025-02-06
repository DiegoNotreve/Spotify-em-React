import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} /> 
      <Sidebar />
      <Main searchTerm={searchTerm || ""} /> 
      <Footer />
    </div>
  );
};

export default App;

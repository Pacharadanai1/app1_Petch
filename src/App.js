import React from "react";
import { Header, Content, Footer } from "./func-components";
//import Calendar from "./class-components";
import Botton from "./class-components";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";

 function App() {
  return (
    <>
      <Header />
      <Content />
      <Botton /> <br/>
      <Calculator2 /> <br/>
      <EventData2 />
      <Footer />
    </>
  );
}

export default App;

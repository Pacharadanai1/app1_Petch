import React from "react";

import { Header, Content, Footer } from "./func-components";
//import Calendar from "./class-components";
import Botton from "./class-components";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";
import RefsFunc from "./refs-func";

export default function App() {
  return (
    <>
      <Header />
      <Content />
      <Botton /> <br/>
      <Calculator2 /> <br/>
      <EventData2 />
      <RefsFunc />  <br/>
      <Footer />
    </>
  );
}
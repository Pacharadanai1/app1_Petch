import React, { useState } from "react";

import { Header, Content, Footer } from "./func-components";
//import Calendar from "./class-components";
import Botton from "./class-components";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";
import RefsFunc from "./refs-func";
import MessageBox from "./state-func";
import { userContext } from "./context";
import Content2 from "./context-content";
import Header2 from "./context-header2";
import Content3 from "./context-content2";
import Router2 from "./router2";
import Router3 from "./router3";
import FormText from "./form-text";

export default function App() {
  let [user,setUser] = React.useState()
  return (
    <userContext.Provider value={[user,setUser]}>
      <FormText /><br/>
      <Router3/> <br/>
      <Header2 />
      <Content3/>
      <Content />
      <Botton /> <br/>
      <Calculator2 /> <br/>
      <EventData2 />
      <RefsFunc />  <br/>
      <MessageBox/> <br/>
      <Content2 />

      <Footer /> <br/>
    </userContext.Provider>
  );
}
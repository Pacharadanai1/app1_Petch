import React from "react";
import { Header, Content, Footer } from "./func-components";
import Calendar from "./class-components";

function App() {
  return (
    <>
      <Header />
      <p>
        <Calendar />
      </p>
      <Content />
      <Footer />
    </>
  );
}

export default App;

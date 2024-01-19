import React, {useState } from "react";

import GridContainer from "./Component/Grid/GridContainer";

import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{ 
  const [containerType,setContainerType]=useState("grid");

  const containerTypeHandler=(container)=>{
    setContainerType(container);
  }

  return (
    <>
        {containerType==="grid" && <GridContainer typeHandler={containerTypeHandler}></GridContainer>}
       
    </>
  );
};


export default App;

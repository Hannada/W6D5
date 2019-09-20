import React from "react";
import Clock from "./clock.jsx";
import Tab from "./tab.jsx";

const Root = (props) => {
  const tabs = [{ title: "Grape", content: "Also Good" }, {title: "Apple", content: "Pretty Good"}, {title: "Banana", content: "Disgusting"}];

  return (<>
  <Clock name={props.clockName}/> 
  <Tab tabs={tabs}/>
  </>);
}


export default Root;


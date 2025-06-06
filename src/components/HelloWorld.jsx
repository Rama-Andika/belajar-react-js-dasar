import { useState } from "react";

const HelloWorld = ({ className, text }) => {
  //   let text = "nama saya budi";
  //   text = "nama saya anton";


  return (
    <div>
      <div className={className}>Hello World1</div>
      <div>{text}</div>
    </div>
  );
};

export default HelloWorld;

import React from "react";

function Regex() {
  
  return (
    <div>
      <Button color="red" children={<><p>hello</p></>}/>
    </div>
  );
}

// our button
const Button = ({ color, children }) => (
  <button style={{color:color}}>{children}</button>
);

export default Regex;

import React, { useState } from "react";

const Echo = () => {
  const [value, setValue] = useState("echo");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input style={{ height: '2rem', width: '16rem', border: '1px solid black' }} type="text" value={value} onChange={handleChange} />
      <p style={{ backgroundColor: 'white' }}>{value}</p>
    </>
  );
};

export default Echo;

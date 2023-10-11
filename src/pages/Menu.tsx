import React from "react";
import MenuItem from "../components/MenuItem";
function Menu() {
  return (
    <div className="max-w-3xl mx-auto divide-y">
      <MenuItem />
      <MenuItem soldout={true} />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}

export default Menu;

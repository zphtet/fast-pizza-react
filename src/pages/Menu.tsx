import MenuItem from "../components/MenuItem";
import { useLoaderData } from "react-router-dom";
function Menu() {
  const menu = useLoaderData();

  console.log(menu);

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

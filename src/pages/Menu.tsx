import MenuItem from "../components/MenuItem";
import { useLoaderData } from "react-router-dom";
import { MenuType } from "../types/type";
function Menu() {
  const menu = useLoaderData() as MenuType[];

  // console.log(menu);

  return (
    <div className="max-w-3xl mx-auto divide-y">
      {menu.map((item) => {
        return <MenuItem key={item.id} menu={item} />;
      })}
    </div>
  );
}

export default Menu;

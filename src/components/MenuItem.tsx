import pizzaImg from "/pizza-1.jpg";
type MenuItemProps = {
  soldout?: boolean;
};
const MenuItem = ({ soldout }: MenuItemProps) => {
  return (
    <div className="flex gap-3 text-sm px-1  py-2">
      <div className="w-[100px] border-2">
        <img
          src={pizzaImg}
          className={`${soldout && "grayscale"}`}
          alt="pizza image"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <p className="text-base">Marherita</p>
          <p className="italic text-gray-400">Tomato, Mozzarella, Basil</p>
        </div>
        {soldout && <p className="uppercase text-gray-400">Sold out</p>}
        {!soldout && (
          <div className="flex items-center gap-2 justify-between">
            <p>$12.00</p>
            <div className="flex items-center gap-2">
              <button className="w-[25px] h-[25px] ring-offset-2 bg-yellow-400 rounded-full focus:ring-2 focus:ring-yellow-400">
                -
              </button>
              <p>1</p>
              <button className="w-[25px] h-[25px] ring-offset-2 bg-yellow-400 rounded-full focus:ring-2 focus:ring-yellow-400">
                +
              </button>
              <button className="px-4 py-1 text-sm bg-yellow-400 rounded-3xl transition-all duration-200 hover:bg-yellow-300 hover:scale-95">
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;

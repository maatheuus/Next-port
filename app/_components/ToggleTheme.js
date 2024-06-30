import { FaMoon, FaSun } from "react-icons/fa";

function ToggleTheme() {
  return (
    <label className="inline-flex items-center relative cursor-pointer">
      <input className="peer hidden" id="toggle" type="checkbox" />
      <div className="relative w-[75px] h-6 bg-stone-100 peer-checked:bg-stone-950 rounded-full after:absolute after:content-[''] after:w-8 after:h-6 after:bg-stone-950 after:rounded-full after:left-2 peer-checked:after:left-[75px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
      <FaSun
        id="Layer_1"
        className="fill-stone-50 opacity-90 peer-checked:opacity-0 absolute w-5 h-5 left-[13px]"
      />
      <FaMoon
        id="Layer_2"
        className=" opacity-0 peer-checked:opacity-80 peer-checked:fill-yellow-500 absolute w-5 h-5 right-[13px] "
      />
    </label>
  );
}

export default ToggleTheme;

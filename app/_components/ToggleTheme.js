import { FaMoon, FaSun } from "react-icons/fa";

function ToggleTheme() {
  return (
    <label className="inline-flex items-center relative cursor-pointer  p-1">
      <input className="peer hidden" id="toggle" type="checkbox" />
      <div className="relative w-[50px] h-7 bg-stone-100 shadow-md peer-checked:bg-stone-950 rounded-full after:absolute after:content-[''] after:w-7 after:h-6 after:bg-stone-950 after:rounded-full after:left-3 after:top-0.5 peer-checked:after:left-[75px] peer-checked:after:translate-x-[-250%] duration-300 after:duration-300 after:shadow-md"></div>
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

/**
 *     <label className="inline-flex items-center relative cursor-pointer">
      <input className="peer hidden" id="toggle" type="checkbox" />
      <div className="relative w-[110px] h-[50px] bg-black peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
      <FaRegMoon
        height="10px"
        width="100px"
        id="Layer_1"
        className="fill-black peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
      />
      <FaSun
        height="512px"
        width="512px"
        id="Layer_1"
        className="fill-white opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
      />
    </label>
 */

import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const langName = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="w-1/2 bg-slate-900  grid grid-cols-12">
        <input
          className=" p-3 m-3  col-span-9"
          type="text"
          placeholder={lang[langName].placeholderName}
        ></input>
        <button className=" bg-red-700 text-white p-3 m-3 rounded-lg col-span-3">
          {lang[langName].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

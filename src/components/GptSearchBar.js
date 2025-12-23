import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openAI.js";

const GptSearchBar = () => {
  const langName = useSelector((store) => store.config.lang);
  const searchInputText = useRef(null);

  const handleGptSearch = async () => {
    console.log(searchInputText.current.value + openai);
    const gptQuery =
      "Act as a movie recommediation system and suggest some movies for the query" +
      searchInputText.current.value +
      ". only give the names of 5 movies with comma seperated like the example given ahead. Ex:Don,golmaal,koi mil gaya, sholay,race ";
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    console.log(completion.choices[0]?.message?.content);
  };

  return (
    <div className="pt-[8%] flex justify-center ">
      <form
        className="w-1/2 bg-slate-900  grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInputText}
          className=" p-3 m-3  col-span-9"
          type="text"
          placeholder={lang[langName].placeholderName}
        ></input>
        <button
          className=" bg-red-700 text-white p-3 m-3 rounded-lg col-span-3"
          onClick={handleGptSearch}
        >
          {lang[langName].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-40 px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl ">{title}</h1>
      <p className="w-5/12  text-base py-6 ">{overview}</p>
      <button className="bg-white rounded-lg text-black p-2 px-12 text-lg hover:bg-opacity-70">
        Play
      </button>
      <button className="bg-gray-500 text-white rounded-lg p-2 px-12 text-lg hover:bg-opacity-40  mx-2">
        More info
      </button>
    </div>
  );
};

export default VideoTitle;

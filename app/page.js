import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col text-white text-lg  gap-4 font-bold h-[44vh] items-center">
        <div className="font-bold flex gap-2 justify-center items-center text-4xl">
          Buy Me A Tea!{" "}
          <span>
            {" "}
            <img src="/tea.gif" width={66} alt="" />
          </span>{" "}
        </div>
        <p>
          {" "}
          A crowdfunding platform . Get funded by your friends and followers.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">sdf</div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold mb-14 text-center">
          Your friends can buy you a tea.
        </h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className=" bg-slate-400 text-black  rounded-full p-2"
              src="/man.gif"
              width={66}
              alt=""
            ></img>
            <p className="font-bold"> Fund Yourself</p>
            <p className=" text-center">
              Your friends are available for you to help!
            </p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className=" bg-slate-400 text-black  rounded-full p-2"
              src="/coin2.gif"
              width={66}
              alt=""
            ></img>
            <p className="font-bold"> Fund Yourself</p>
            <p className=" text-center">
              Your friends are available for you to help!
            </p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className=" bg-slate-400 text-black  rounded-full p-2"
              src="/group2.gif"
              width={66}
              alt=""
            ></img>
            <p className="font-bold"> Friends want to help</p>
            <p className=" text-center">
              Your friends are available for you to help!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-14 text-center">
          Learn more about us.
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dJQn4DqzMVQ?si=KukZVeqlf4meabCH"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

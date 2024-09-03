import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]  ">
        <div className=" font-bold flex  gap-3 items-center  text-5xl">
          Buy Me A Tea{" "}
          <span>
            {" "}
            <img className="bg-none" src="/tea2.gif" width={44} alt="" />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers .Start now
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start here
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14">
          Your Friends can buy you a Tea{" "}
        </h1>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              width={88}
              className=" bg-slate-400 rounded-full p-2 text-black "
              src="/man2.gif"
              alt=""
            />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your friends want to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              width={88}
              className=" bg-slate-400 rounded-full p-2 text-black "
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your friends want to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              width={88}
              className=" bg-slate-400 rounded-full p-2 text-black "
              src="/man2.gif"
              alt=""
            />
            <p className="font-bold"> Friends want to help</p>
            <p className=" text-center">Your friends want to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold text-center mb-14">
          Learn more about us{" "}
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fwt-Dzq_xjE?si=78CELt-0N6P9LQji"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}


import React from "react";

const Username = async ({params}) => {
  return (
    <>

      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[350px]"
          src="/cover.webp"
        ></img>
        <div className="absolute -bottom-10 right-[46%] border-2  border-white rounded-full ">
          <img
            className="rounded-full"
            width={120}
            height={120}
            src="/pfp.jpeg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="info flex justify-center items-center my-12 flex-col gap-2">
        <div className="font-bold text-lg">@{await params.username}</div>

        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-500">
          9,719 members . 82 posts . 450/releases
        </div>
      </div>
    </>
  );
};

export default Username;

import React from "react";

const GameOver = ({ count, data }) => {
  console.log(data);
  return (
    <div className="card w-[500px] h-[350px] bg-[white] rounded-xl p-5 flex flex-col justify-center items-center gap-10">
      <img
        src="/photo-removebg-preview.png"
        alt=""
        className="w-[150px] h-[150px]"
      />
      <h4 className="text-2xl font-extrabold w-[300px] text-center text-[#864848]">
        Siz {data.length} sovoldan {count} toptiz tabriklaymiza  
      </h4>
    </div>
  );
};

export default GameOver;

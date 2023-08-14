
const Card = ({upDate,quiz, quizId , length}) => {
  
  return (
    <div className="card w-[500px] h-[350px] bg-[white] rounded-xl p-5">
      <div className="line bg-[#E8E8EA] w-[100%] h-[10px] rounded-xl">
        <div
          className="actime-line h-[10px] rounded-xl bg-gradient-to-r from-teal-300 via-green-400 to-green-600 "
          style={{ width: length + "%" }}
        ></div>
      </div>
      <div className="quiz flex flex-col item-center h-[250px] justify-center gap-5 mt-4">
        <h1 className="text-2xl font-[800] ">{quiz[quizId]?.sovol}</h1>
        <button
          onClick={upDate}
          value="a"
          className="w-[100%] h-[60px] border-solid border-2 border-[#EEEEEE] text-xl font-extrabold  text-start text-[#864848]  p-3"
        >
          A){quiz[quizId]?.a}
        </button>
        <button
          onClick={upDate}
          value="b"
          className="w-[100%] h-[60px] border-solid border-2 border-[#EEEEEE] text-xl font-extrabold text-start text-[#864848] p-3"
        >
          B){quiz[quizId]?.b}
        </button>
        <button
          onClick={upDate}
          value="c"
          className="w-[100%] h-[60px] border-solid border-2 border-[#EEEEEE] text-xl font-extrabold text-start text-[#864848] p-3"
        >
          C){quiz[quizId]?.c}
        </button>
      </div>
    </div>
  );
};

export default Card;

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../features/quiz/quizSlice";
import { resetMode } from "../features/home/homeSlice";
import { useEffect } from "react";

function FinishedScreen() {
  const { name, icon } = useSelector((state) => state.home);
  const { score, questions } = useSelector((state) => state.quiz);
  const { darkmode } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bgColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  const bgStyle = {
    backgroundColor: bgColors[name],
  };

  function playAgain() {
    dispatch(resetQuiz());
    dispatch(resetMode());
    navigate("/");
  }

  useEffect(() => {
    if (!name || !icon) {
      dispatch(resetQuiz());
      dispatch(resetMode());
      navigate("/");
    }
  }, [icon, name, dispatch, navigate]);

  return (
    <div className="lg:grid-cols-2 lg:gap-24 sm:gap-16 grid grid-cols-1">
      <div className="w-[450px]">
        <h2
          className={`text-[40px] lg:text-[64px] font-light leading-[100%] transition-all duration-300 ${
            darkmode ? "text-white" : "text-dark-navy"
          }`}
        >
          Quiz completed <br />
          <span className="font-medium">You scored...</span>
        </h2>
      </div>
      <div className="w-[564px]">
        <div
          className={`rounded-[12px] flex flex-col items-center gap-16 lg:rounded-[24px] p-20 transition-all duration-300 ${
            darkmode ? "bg-navy" : "bg-white"
          }`}
        >
          <div className="gap-8 flex items-center lg:gap-12">
            <img
              src={icon}
              alt={name}
              className="h-[4rem] w-[4rem] p-2"
              style={bgStyle}
            />
            <p
              className={`text-[18px] lg:text-[28px] font-medium leading-[100%] transition-all duration-300 ${
                darkmode ? "text-white" : "text-dark-navy"
              }`}
            >
              {name}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p
              className={`text-[88px] lg:text-[144px] font-medium leading-[100%] transition-all duration-300 ${
                darkmode ? "text-white" : "text-dark-navy"
              }`}
            >
              {score}
            </p>
            <p
              className={`text-[18px] lg:text-[24px] leading-[150%] transition-all duration-300 ${
                darkmode ? "text-light-bluish" : "text-dark-navy"
              }`}
            >
              out of {questions.length}
            </p>
          </div>
        </div>
        <button
          className=" text-[18px] mobile:p-7 rounded-[12px] col-start-2 mt-12 w-full lg:rounded-[24px] bg-purple p-[32px] lg:text-[28px] font-medium leading-[100%] text-white transition-all duration-300"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default FinishedScreen;

import { useDispatch, useSelector } from "react-redux";
import { setAnswer, setChosenAnswer, setIndex, setScore } from "../features/quiz/quizSlice";
import { useEffect, useState } from "react";
import QuizOptions from "./QuizOptions";
import { useNavigate } from "react-router-dom";

function QuizPage({ question }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const { index, questions, chosenAnswer, correctAnswer, score } = useSelector(
    (state) => state.quiz,
  );
  const { darkmode } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitAnswer() {
    if (chosenAnswer === "") setIsAnswered(true);

    setUserAnswer(chosenAnswer);
  }

  function nextQuestion() {
    if (userAnswer === correctAnswer) dispatch(setScore());

    dispatch(setIndex(index));
    dispatch(setChosenAnswer(""));
    setIsAnswered(false);
  }

  function finishQuiz() {
    if (userAnswer === correctAnswer) dispatch(setScore());

    navigate("/finished");
  }

  const btnClass =
    "w-full rounded-[24px] bg-purple p-[32px] text-[28px] font-medium leading-[100%] text-white transition-all duration-300 hover:bg-[#a729f571] sm:text-[18pxrem] sm:p-7 sm:rounded-[12px]";

  useEffect(() => {
    dispatch(setAnswer(question.answer));
  }, [question.answer, dispatch]);

  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-2  lg:gap-x-0">
      <div className="flex flex-col gap-11 lg:pb-12 sm:gap-5 pb-4 w-[465px]">
        <p
          className={`lg:text-[20px] italic leading-[150%] transition-all duration-300 text-[14px] ${
            darkmode ? "text-light-bluish" : "text-dark-navy"
          }`}
        >
          Question {index + 1} of {questions.length}
        </p>
        <h2
          className={`lg:text-[36px] font-medium leading-[120%] transition-all duration-300 text-[32px] ${
            darkmode ? "text-white" : "text-dark-navy"
          }`}
        >
          {question.question}
        </h2>
        <div className="mt-auto">
          <progress
            max={questions.length}
            className={`w-full ${
              darkmode
                ? "[&::-moz-progress-bar]:bg-navy [&::-webkit-progress-bar]:bg-navy"
                : "[&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:bg-white"
            }  [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:p-[1.5px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-purple`}
            value={score}
          />
        </div>
      </div>
      <div className="space-y-5 lg:space-y-10 w-[565px]">
        {question.options.map((item, index) => (
          <QuizOptions
            key={item}
            option={item}
            optionIndex={index}
            userAnswer={userAnswer}
            setIsAnswered={setIsAnswered}
          />
        ))}
      </div>
      <div className="col-start-1 lg:col-start-2 mt-6">
        {userAnswer === "" && (
          <button className={btnClass} onClick={submitAnswer}>
            Submit Answer
          </button>
        )}

        {userAnswer !== "" && index < questions.length - 1 ? (
          <button className={btnClass} onClick={nextQuestion}>
            Next Question
          </button>
        ) : (
          userAnswer !== "" &&
          index === questions.length - 1 && (
            <button className={btnClass} onClick={finishQuiz}>
              Submit Quiz
            </button>
          )
        )}

        <div
          className={`mt-12 flex items-center justify-center gap-8 ${
            isAnswered ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src="/assets/icon-incorrect.svg" alt="incorrect icon" />
          <p className="text-[24px] leading-[150%] text-red sm:text-[18px]">
            Please select an answer
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;

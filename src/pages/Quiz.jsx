import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../features/quiz/quizSlice";
import QuizPage from "../components/QuizPage";

function Quiz() {
  const { name: selectedQuiz, quizzes } = useSelector((state) => state.home);
  const { questions, index } = useSelector((state) => state.quiz);
  const selectedQuizData = quizzes.quizzes.find((item) => item.title === selectedQuiz);


  const dispatch = useDispatch();

  const currentQuestion = questions[index];



  useEffect(() => {
    dispatch(setQuestions(selectedQuizData?.questions));
  }, [selectedQuiz, dispatch, selectedQuizData]);

  return (
    <div>
      {currentQuestion && (
        <QuizPage key={currentQuestion.question} question={currentQuestion} />
      )}
    </div>
  );
}

export default Quiz;

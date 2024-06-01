import { useDispatch, useSelector } from "react-redux";
import { selectIcon, selectQuiz } from "../features/home/homeSlice";
import { useNavigate } from "react-router-dom";

function HomeItem({ img, text }) {
  const { darkmode } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setQuiz() {
    dispatch(selectQuiz(text));
    dispatch(selectIcon(img));
    navigate(`/${text}`);
  }

  const bgColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  const bgStyle = {
    backgroundColor: bgColors[text],
    borderRadius: "0.4rem",
  };

  return (
    <li
      className={`sm:gap-6 sm:rounded-[12px] flex cursor-pointer items-center gap-12 rounded-[24px] p-8 shadow-sm transition-all duration-300 ${
        darkmode ? "bg-navy" : "bg-white"
      }`}
      onClick={setQuiz}
    >
      <img
        src={img}
        alt={text}
        className="h-[4rem] w-[4rem] p-2"
        style={bgStyle}
      />
      <p
        className={`mobile:text-[18px] text-[28px] font-medium leading-[100%] transition-all duration-300 ${
          darkmode ? "text-white" : "text-dark-navy"
        }`}
      >
        {text}
      </p>
    </li>
  );
}

export default HomeItem;
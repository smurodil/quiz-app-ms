import { useSelector } from "react-redux"
import { customFetch } from '../utils'
import ToggleMode from './ToggleMode'


const url = '/quizzes'

export const loader = async() => {
  const response = await customFetch(url);
  const quizzes = response.data.data
  return { quizzes }
}

function Header() {
  const { name, icon, darkmode } = useSelector((state) => state.home)
  
  const bgColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  const bgStyle = {
    backgroundColor: bgColors[name],
  }

  return (
    <div className="lg:pb-24 z-[2] lg:flex lg:items-center lg:flex-row lg:justify-between pb-40 flex flex-col items-center">
      <div className={`lg:gap-12 flex items-center gap-8 mb-6 ${!name ? "opacity-0" : "opacity-100"}`}>
        <img src={icon} alt="" className="h-[40px] w-[40px] p-2" style={bgStyle} />
        <p className={`sm:text-[18px] text-[28px] font-medium leading-[100%] transition-all duration-300 ${darkmode ? "text-white" : "text-dark-navy"}`}>
          {name}
        </p>
      </div>
      <ToggleMode/>
    </div>
  )
}

export default Header
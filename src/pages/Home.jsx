import { useLoaderData } from "react-router-dom"
import { HomeItem } from '../components'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuizzes } from "../features/home/homeSlice"

function Home() {
  const { darkmode } = useSelector((state) => state.home); 
  const data = useLoaderData()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(setQuizzes(data))
  }, [dispatch, data])


  return (
    <div className="lg:gap-16 md:gap-16 flex flex-col items-center lg:grid md:flex md:flex-col md:items-center grid-cols-2">
      <div className="w-[465px]">
        <h1 className={`text-[40px] pb-8 lg:pb-20 lg:text-[64px] font-light leading-[100%] transition-all duration-300 ${
            darkmode ? "text-white" : "text-dark-navy"
          }`}>
            Welcome to the <br />
            <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className={`sm:text-[18px] text-[20px] italic leading-[150%] transition-all duration-300 ${
            darkmode ? "text-light-bluish" : "text-grey-navy"
          }`}>
            Pick a subject to get started.
        </p>
      </div>
      <div className="w-[564px]">
        <ul className="space-y-5 lg:space-y-6">
          {data && 
            data.quizzes.map((item) => (
            <HomeItem key={item.title} img={item.icon} text={item.title} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
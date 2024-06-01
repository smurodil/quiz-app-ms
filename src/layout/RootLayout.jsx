import { Outlet } from "react-router-dom"
import { Header, PageDesign } from '../components'
import { useSelector } from "react-redux"

function RootLayout() {
  const { darkmode } = useSelector((state) => state.home)

  return (
    <div className={`lg:px-24 md:py-8 relative grid min-h-screen grid-rows-[auto_1fr] overflow-hidden px-0 py-32 transition-all duration-300 ${darkmode ? "bg-dark-navy" : "bg-light-grey" }`}>
      <Header/>
      <main className="z-[2]">
        <Outlet/>
      </main>
      <PageDesign/>
    </div>
  )
}

export default RootLayout
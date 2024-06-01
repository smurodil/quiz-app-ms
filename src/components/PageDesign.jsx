import { useSelector } from "react-redux";

function PageDesign() {
  const { darkmode } = useSelector((state) => state.home);
  return (
    <div>
      <img
        src="/assets/pattern-background-desktop-dark.svg"
        alt="pattern img"
        className={`desktop:hidden absolute  inset-0 transition-all duration-300 ${
          darkmode ? "opacity-100" : "opacity-0"
        }`}
      />

      <img
        src="/assets/pattern-background-desktop-light.svg"
        alt="pattern img"
        className={`desktop:hidden absolute  inset-0 transition-all duration-300 ${
          darkmode ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src="/assets/pattern-background-tablet-light.svg"
        alt="pattern img"
        className={`desktop:block absolute  inset-0 hidden transition-all duration-300 ${
          darkmode ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="/assets/pattern-background-tablet-dark.svg"
        alt="pattern img"
        className={`desktop:block absolute  inset-0 hidden transition-all duration-300 ${
          darkmode ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default PageDesign;

import { Link } from "react-router-dom";

const AButton = ({ children, active, linkto }) => {
  return (
    <Link>
      <div
        className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold ${
          active ? "bg-yellow-50 text-black" : "bg-richblack-800"
        } hover:scale-95 transition-all duration-200`}
      >
        {children}
      </div>
    </Link>
  );
};

export default AButton;

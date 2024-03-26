import { Link, json, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from "../core/auth/ProfileDropdown";
import { useEffect, useState } from "react";
import { apiConnector } from "../../apiService/apiConnector";
import { categories } from "../../apiService/apis";
const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const [sublinks, setSublinks] = useState();
  const [showDropdown,setShowDropdown] = useState(); 
  // const location = useLocation();
  // const matchRoute = (route) => {
  //     return matchPath(location.pathname, { path: route });
  // };

  const fetchSublink = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("resulr", result);
      console.log(json.result);
      setSublinks(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSublink();
  }, []);

  return (
    <div className=" bg-gray-900 flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 bg-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-education-logo-vector-image-png-image_4092977.jpg"
            alt="Logo"
            width={60}
            height={22}
            loading="lazy"
          />
        </Link>

        <nav>
          <ul className="flex gap-x-6">
            {NavbarLinks.map((link, index) => {
              return (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    // <div className="relative flex cursor-pointer items-center gap-1">
                    //   <p className="text-yellow-500">{link.title}</p>

                    //   <div className="bg-red-400 z-1 absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                    //     {sublinks && sublinks.length ? (
                    //       sublinks.map((sublink, index) => (
                    //         <Link to={`${sublink.link}`} key={index}></Link>
                    //       ))
                    //     ) : (
                    //       <div>Not Found</div>
                    //     )}
                    //   </div>
                    // </div>


                    <div className="relative flex cursor-pointer items-center gap-1">
  <p className="text-yellow-500 cursor-pointer" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
    {link.title}
  </p>

  {showDropdown && (
    <div className="bg-red-400 absolute left-1/2 top-full transform -translate-x-1/2 flex flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 lg:w-[300px]">
      {sublinks && sublinks.length ? (
        sublinks.map((sublink, index) => (
          <Link to={`${sublink.link}`} key={index}>{sublink.title}</Link>
        ))
      ) : (
        <div>No sublinks found</div>
      )}
    </div>
  )}
</div>

                  ) : (
                    <Link to={link?.path}>
                      <p className="text-yellow-500">{link.title}</p>

                      {/* <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p> */}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== "ACCOUNT_TYPE.INSTRUCTOR" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-white">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 text-white">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

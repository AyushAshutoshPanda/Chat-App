import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setotherUsers } from "../redux/userSlice";

const Sidebar = () => {
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  // 🔁 Load users once from backend (or keep backup from redux if needed)
  useEffect(() => {
    setAllUsers(otherUsers); // backup
  }, []);

 const logoutHandler = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
    dispatch(setAuthUser(null))  // ✅ This should be here always
    navigate("/login");
    toast.success(res.data.message);
  } catch (error) {
    console.log(error);
    dispatch(setAuthUser(null))  // still good here
  }
};


  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const conversationUser = allUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversationUser) {
      dispatch(setotherUsers([conversationUser]));
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[550px] w-72 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white p-6 shadow-xl flex flex-col justify-between">
      <div>
        {/* Search Box */}
        <form onSubmit={searchSubmitHandler} className="flex items-center gap-3 mb-6">
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition"
          >
            <BiSearchAlt2 className="text-white w-5 h-5" />
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-slate-600 my-4" />
        {/* User List */}
        <div className="overflow-y-auto h-[400px] pr-1">
          <OtherUsers />
        </div>
      </div>

      {/* Logout Button */}
      <div>
        <button
          onClick={logoutHandler}
          className="w-[40%] h-[90%]  bg-red-600 hover:bg-red-700 transition text-white  rounded-lg  mt-2 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

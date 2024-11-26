import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../utils";
import axios from "axios";
import { logout } from "../redux/slices/authSlice";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      // Add the complete API endpoint (including protocol and domain if necessary)
      const response = await axios.post("http://localhost:8000/api/user/logout");
      
      if (response.status === 200) {
        dispatch(logout(user));
        navigate("/log-in");
      } else {
        console.error("Logout failed:", response.data);
      }
    } catch (error) {
      console.error("Error UserAvatar :: logout :: ", error);
    }
  };

  return (
    <>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="items-center justify-center w-10 h-10 bg-blue-600 rounded-full 2xl:w-12 2xl:h-12">
              <span className="font-semibold text-white">
                {getInitials(user?.name)}
              </span>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-gray-100 rounded-md shadow-2xl ring-1 ring-black/5 focus:outline-none">
              <div className="p-4">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setOpen(true)}
                      className="flex items-center w-full px-2 py-2 text-base text-gray-700 rounded-md group"
                    >
                      <FaUser className="mr-2" aria-hidden="true" />
                      Profile
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setOpenPassword(true)}
                      className="flex items-center w-full px-2 py-2 text-base text-gray-700 rounded-md group"
                    >
                      <FaUserLock className="mr-2" aria-hidden="true" />
                      Change Password
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logoutHandler}
                      className="flex items-center w-full px-2 py-2 text-base text-red-600 rounded-md group"
                    >
                      <IoLogOutOutline className="mr-2" aria-hidden="true" />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default UserAvatar;
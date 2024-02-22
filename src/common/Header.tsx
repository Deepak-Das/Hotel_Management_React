import { useState } from "react";
import { BiBell, BiNotification } from "react-icons/bi";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { GrLogin, GrLogout } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { IoPower } from "react-icons/io5";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineManageAccounts,
} from "react-icons/md";

const Header = () => {
  const [toggleProfile, setToggleProfile] = useState(false);
  return (
    <>
      <header className="tw-relative tw-flex tw-items-center tw-justify-end tw-gap-4 tw-bg-[#FFFFFF] tw-px-8 tw-py-4">
        <img
          className="tw-size-8 tw-rounded-full  tw-border"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/800px-Flag_of_India.png?20230815162632"
        />
        <div className="  tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-gap-3">
          <img
            className="tw-size-10 tw-rounded-full  tw-border"
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            onClick={() => setToggleProfile(!toggleProfile)}
          />
          <div
            className="tw-flex tw-flex-col"
            onClick={() => setToggleProfile(!toggleProfile)}
          >
            <h6 className="tw-text-[.70rem] tw-font-medium tw-text-indigo-400">
              Administrator
            </h6>
            <button className="tw-flex tw-items-center tw-gap-2">
              <h6 className="tw-font-medium tw-text-[#5e84a5]">
                Mr. xyz singh
              </h6>
              <span className="tw-text-xl">
                {toggleProfile ? <MdArrowDropDown /> : <MdArrowDropUp />}
              </span>
            </button>
          </div>
          <div className="tw-relative">
            <BiBell className="tw-size-6 tw-text-[#5e84a5] " />
            <span className="tw-absolute tw-right-[.25rem]  tw-top-1 tw-aspect-square tw-rounded-full tw-bg-[#09C2DE] tw-p-[.20rem] tw-text-[.70rem] tw-text-white"></span>
          </div>

          {/* this is profile dialoge */}

          <div
            className={` tw-absolute tw-right-6 tw-top-16 tw-flex tw-flex-col tw-rounded-t-lg tw-border-[1px] tw-border-t-4 tw-border-t-indigo-400 tw-bg-gray-100  tw-transition-all tw-duration-150 tw-ease-in ${!toggleProfile ? "-tw-z-10 tw-opacity-0" : "tw-opacity-1"}`}
          >
            <div className="tw-mx-12 tw-flex tw-items-center tw-justify-center tw-gap-6 tw-py-2">
              <img
                className="tw-size-14 tw-rounded-full  tw-border"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              />
              <div className="tw-flex tw-flex-col">
                <h6 className="tw-text-lg tw-font-semibold tw-leading-5 tw-text-[#5e84a5]">
                  Mr. xyz singh
                </h6>
                <h6 className="tw-text-[.80rem] tw-font-medium tw-leading-5 tw-text-gray-400">
                  email@gamil.com
                </h6>
              </div>
            </div>
            <ul>
              <li>
                <a className="tw-text-md tw-flex tw-items-center tw-justify-start tw-gap-2 tw-bg-white tw-p-2 tw-text-sm tw-text-[#5e84a5]">
                  <FaRegUser className="tw-text-xl" />

                  <span>View Profile</span>
                </a>
              </li>
              <li>
                <a className="tw-text-md tw-flex tw-items-center tw-justify-start tw-gap-2 tw-bg-white tw-p-2 tw-text-[#5e84a5]">
                  <GrLogin className="tw-text-xl" />

                  <span>Login Activity</span>
                </a>
              </li>
              <li>
                <a className="tw-text-md tw-flex tw-items-center tw-justify-start tw-gap-2 tw-bg-white tw-p-2 tw-text-[#5e84a5]">
                  <MdOutlineManageAccounts className="tw-text-xl" />

                  <span>Account Setting</span>
                </a>
              </li>
              <hr />
              <li>
                <a className="tw-text-md tw-flex tw-items-center tw-justify-start tw-gap-2 tw-bg-white tw-p-2 tw-py-3 tw-text-[#5e84a5]">
                  <IoPower className="tw-text-xl " />

                  <span className="">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

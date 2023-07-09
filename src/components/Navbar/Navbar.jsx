import React, {useState, useContext } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiVideoPlus } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import LoadingBar from 'react-top-loading-bar'

import {
  MdOutlineNotifications,
  MdKeyboardVoice,
  MdClose,
} from "react-icons/md";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { context } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [progress, setProgress] = useState(0)

  const { mobileMenu, setMobileMenu, searchKey, setSearchKey } =
    useContext(context);
    const navigate = useNavigate()
const searchHandler=(e)=>{
  if (e.key==='Enter' || e === 'searchbutton' && searchKey?.length>0) {
    navigate(`/search/${searchKey}`)
    
  }
}

  return (
    <div className="app__navbar">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="app__navbar-left">
        <RxHamburgerMenu
          size={30}
          className="hamburger"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        <AiFillYoutube size={30} color="red" />
        <span>YouTube</span>
      </div>
      <div className="app__navbar-center">
        <div className="app__navbar-center_search">
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyUp={searchHandler}
            type="text"
            placeholder="Search..."
            value={searchKey}
          />
          <button type="button" onClick={() => searchHandler("searchbutton")}>
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <MdKeyboardVoice size={25} color="black" />
      </div>
      <div className="app__navbar-right">
        <div className="mobile-search_icons">
          <AiOutlineSearch size={20} />
        </div>
        <BiVideoPlus size={25} color="black" />
        <MdOutlineNotifications size={25} color="black" />
        <BsPersonCircle size={25} color="black" />
      </div>
    </div>
  );
};

export default Navbar;

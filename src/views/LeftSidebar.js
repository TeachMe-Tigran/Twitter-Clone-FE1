import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const NAVBAR_DATA = [
  {
    path: `/`,
    text: `Home`,
    SVG: { ...HomeIcon },
  },
  {
    path: `/explore`,
    text: `Explore`,
    SVG: { ...SearchIcon },
  },
  {
    path: `notifications`,
    text: `Notifications`,
    SVG: { ...NotificationsNoneIcon },
  },
  {
    path: `messages`,
    text: `Messages`,
    SVG: { ...MailOutlineIcon },
  },
  {
    path: `bookmarks`,
    text: `Bookmarks`,
    SVG: { ...BookmarkBorderIcon },
  },
  {
    path: `lists`,
    text: `Lists`,
    SVG: { ...ListAltIcon },
  },
  {
    path: `profile`,
    text: `Profile`,
    SVG: { ...PermIdentityIcon },
  },
];
const LeftSidebar = () => {
  return (
    <div className="leftSidebarContainer">
      <div className='fixed'>
      <header className="leftSideBarHeader">
        <TwitterIcon />
      </header>
      <nav>
        <>
          {NAVBAR_DATA.map(({ path, text, SVG }, i) => (
            <NavLink to={path} key={i} activeClassName="active">
              <span>
                <SVG />
                <span className="sidebarNavText"> {text} </span>
              </span>
            </NavLink>
          ))}
        </>

        <div className="navButtonMore">
          <MoreHorizIcon />
          <span className="navMoreText"> More</span>
        </div>
      </nav>
      <button className="sidebarTweet">Tweet</button>
      </div>
    </div>
  );
};

export default LeftSidebar;

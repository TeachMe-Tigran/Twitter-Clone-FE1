import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import {
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import TwitterIcon from "../components/TwitterIcon";

const NAVBAR_DATA = [
  {
    path: `home`,
    text: `Home`,
    SVG: { ...Home },
  },
  {
    path: `explore`,
    text: `Explore`,
    SVG: { ...Search },
  },
  {
    path: `notifications`,
    text: `Notifications`,
    SVG: { ...NotificationsNone },
  },
  {
    path: `messages`,
    text: `Messages`,
    SVG: { ...MailOutline },
  },
  {
    path: `bookmarks`,
    text: `Bookmarks`,
    SVG: { ...BookmarkBorder },
  },
  {
    path: `lists`,
    text: `Lists`,
    SVG: { ...ListAlt },
  },
  {
    path: `profile`,
    text: `Profile`,
    SVG: { ...PermIdentity },
  },
];
const LeftSidebar = () => {
  return (
    <div className="leftSidebarContainer">
      <TwitterIcon className="leftSideBarHeader" />
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
          <MoreHoriz />
          <span className="navMoreText"> More</span>
        </div>
      </nav>
      <button className="sidebarTweet">Tweet</button>
    </div>
  );
};

export default LeftSidebar;

import Following from "./following/Following";
import "./RightSidebar.css";
import Search from './search/Search'
import Trends from "./trends/Trends";
const RightSidebar = () => {
  return (
    <div className='sidebarContainer'>
      <Search />
      <Trends />
      <Following />
    </div>
  )
};

export default RightSidebar;


import "./RightSidebar.css";
import Search from './search/Search'
import Trends from "./trends/Trends";
const RightSidebar = () => {
  return (
    <div className='sidebarContainer'>
      <Search />
      <Trends />
    </div>
  )
};

export default RightSidebar;


import LeftSidebar from '../LeftSidebar'
import RightSidebar from '../RightSidebar'
import AddTweetBox from '../AddTweetBox'

import './home.css'

const WrapNavPages = ({children}) => {
    return (
        <div className='container'>
            <LeftSidebar></LeftSidebar>
                {/* <AddTweetBox></AddTweetBox> */}
                {children}
            <RightSidebar></RightSidebar>
        </div>
    )
}

export default WrapNavPages 
import LeftSidebar from '../leftSidebar'
import RightSidebar from '../rightSidebar'
// import AddTweetBox from '../AddTweetBox'

import './wrapNavPages.css'

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
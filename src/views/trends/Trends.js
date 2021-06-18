import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import style from './trends.module.css'

function Trends() {
    return (
        <div className={style.trendsContainer}>
            <div className={style.trendsTitle}>
                <h2>Trends for you</h2>
                <div className={style.dotes}>
                    <FontAwesomeIcon className={style.settings} icon={faCog} />
                </div>
            </div>
            <div className={style.trends}>
                <div>
                    <span className={style.titleSpan}>Trending in Armenia</span>
                    <h4>#Armenia</h4>
                    <span className={style.titleSpan}>5165 views</span>
                </div>
                <div className={style.dotes}>
                    <span className={style.dote}></span>
                </div>
            </div>
            <div className={style.trends}>
                <div>
                    <span className={style.titleSpan}>Trending in Armenia</span>
                    <h4>#Armenia</h4>
                    <span className={style.titleSpan}>5165 views</span>
                </div>
                <div className={style.dotes}>
                    <span className={style.dote}></span>
                </div>
            </div>
            <div className={style.trends}>
                <div>
                    <span className={style.titleSpan}>Trending in Armenia</span>
                    <h4>#Armenia</h4>
                </div>
                <div className={style.dotes}>
                    <span className={style.dote}></span>
                </div>
            </div>
            <div className={style.trends}>
                <div>
                    <span className={style.titleSpan}>Trending in Armenia</span>
                    <h4>#Armenia</h4>
                    <span className={style.titleSpan}>5165 views</span>
                </div>
                <div className={style.dotes}>
                    <span className={style.dote}></span>
                </div>
            </div>
            <div className={style.trends}>
                <div>
                    <span className={style.titleSpan}>Trending in Armenia</span>
                    <h4>#Armenia</h4>
                    <span className={style.titleSpan}>5165 views</span>
                </div>
                <div className={style.dotes}>
                    <span className={style.dote}></span>
                </div>
            </div>
            <div style={{padding:'20px 10px'}}>
                <p className={style.show}>Show More</p>
            </div>
           
        </div>
    )
}

export default Trends

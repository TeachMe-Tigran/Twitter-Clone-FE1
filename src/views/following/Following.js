import React from 'react'
import style from './following.module.css'
import img from '../../assets/images/large_thumbnail.jpg'
import fifa from '../../assets/images/unnamed.png'
import { Link } from 'react-router-dom'
import { VerifiedUser } from '@material-ui/icons'
function Following() {
    return (
        <div className={style.followersContainer}>
            <div className={style.followersTitle}>
                <h2>Who to follow</h2>
            </div>
            <div className={style.followers}>
                <div className={style.followersFlex}>
                    <figure>
                        <img src={img} alt='followers' />
                    </figure>
                    <div className={style.followersInfo}>
                        <Link to='/' className={style.followVerify}>
                            <span className={style.followName}>Huawei</span>
                            <VerifiedUser className={style.verifiedUser} />
                        </Link>
                        <span className={style.followNameInfo}>@Huawei</span>
                    </div>
                </div>
                <button className={style.follow}>
                    Follow
                </button>
            </div>
            <div className={style.followers}>
                <div className={style.followersFlex}>
                    <figure>
                        <img src={fifa} alt='followers' />
                    </figure>
                    <div className={style.followersInfo}>
                        <Link to='/' className={style.followVerify}>
                            <span className={style.followName}>FIFA.COM</span>
                            <VerifiedUser className={style.verifiedUser} />
                        </Link>
                        <span className={style.followNameInfo}>@Fifa.com</span>
                    </div>
                </div>
                <button className={style.follow}>
                    Follow
                </button>
            </div>
            <div className={style.followers}>
                <div className={style.followersFlex}>
                    <figure>
                        <img src={img} alt='followers' />
                    </figure>
                    <div className={style.followersInfo}>
                        <Link to='/' className={style.followVerify}>
                            <span className={style.followName}>Huawei</span>
                            <VerifiedUser className={style.verifiedUser} />
                        </Link>
                        <span className={style.followNameInfo}>@Huawei</span>
                    </div>
                </div>
                <button className={style.follow}>
                    Follow
                </button>
            </div>
            <div className={style.followers} style={{ padding: '20px 10px' }}>
                <p className={style.show}>Show More</p>
            </div>
        </div>
    )
}

export default Following

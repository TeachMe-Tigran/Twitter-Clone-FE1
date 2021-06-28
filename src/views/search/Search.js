import React, { useState } from 'react'
import style from './search.module.css'
import { Search} from '@material-ui/icons';

function Searching() {
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false);
    const handleSearch = (e) => {
        const { value } = e.target;
        setValue(value)
        setOpen(true)
    }
    const handleFocus = () => {
        setOpen(true)
    }
    const handleResetValue = () => {
        setValue('')
    }
 const handleBlur = () => {
     setValue('')
    setOpen(false)
 }
    return (
        <div onClick={handleResetValue} className={style.searchContainer}>
            <div className={style.fixed}>
                <div onClick={handleFocus} className={!open ? style.searching : style.searchingFocus}>
                    <div className={style.searchBlock}>
                        <div>
                            <Search className={style.searchIcon} />
                            <input type='text'
                                className={style.searchInput}
                                placeholder='Search Twitter'
                                onChange={(e) => handleSearch(e)}
                                onBlur = {handleBlur}
                                value={value}
                            />
                        </div>
                        

                    </div>
                </div>
                {
                            open && <div className={style.modalSearch}
                        >
                            {
                                 !value ? <p>Try searching for people, topics, or keywords</p> :
                                 <div className={style.searchResult}>
                                     {value}
                                 </div>
                            }
                        </div>
                        }
            </div>

        </div>
    )
}

export default Searching

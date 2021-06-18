import React, { useState } from 'react'
import style from './search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
    const [state, setState] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const handleSearch = (e) => {
        const { value } = e.target;
        setState(value)
        setIsOpen(true)
    }
    const handleFocus = () => {
        setIsOpen(true)
    }
    const handleResetValue = () => {
        setState('')
    }
    
    return (
        <div onClick={handleResetValue} className={style.searchContainer}>
            <div onClick={handleFocus} className={!isOpen ? style.searching : style.searchingFocus}>
                <div className={style.searchBlock}>
                    <div>
                        <FontAwesomeIcon className={style.searchIcon} icon={faSearch} />
                        <input type='text'
                            className={style.searchInput}
                            placeholder='Search Twitter'
                            onChange={(e) => handleSearch(e)}
                            value={state}
                        />
                    </div>
                    {state && <div
                        className={style.resetValue}
                        onClick={handleResetValue}
                    >
                        <svg viewBox="0 0 15 15" aria-hidden="true" class="r-cqee49 r-4qtqp9 r-yyyyoo r-1or9b2r r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-5soawk"><g><path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"></path></g></svg>
                    </div>
                    }

                </div>
            </div>
            {
                isOpen  && <div className={style.modalSearch}>
                    {
                        !state ? <p>Try searching for people, topics, or keywords</p> :
                            <div className={style.searchResult}>
                                    {state}
                            </div>
                    }
                </div>
            }
        </div>
    )
}

export default Search
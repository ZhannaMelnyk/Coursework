import React from "react";
import '../../styles/SearchBox.css'

class SearchBox extends React.Component {
    render() {
        return <div className='header__search'>
            <input className='header__search-input' type='text' placeholder='Search' />
            <input className='header__search-btn' type='submit' value='Search' />
        </div>
    }
}

export default SearchBox;
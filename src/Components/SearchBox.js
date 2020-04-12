import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <div className="tc pa2">
            <input 
            placeholder="search robots..."
            type="search"
            className="bg-lightest-blue pa3 b--green ba"
            onChange={searchChange}
            ></input>
        </div>
    )
}
export default SearchBox;
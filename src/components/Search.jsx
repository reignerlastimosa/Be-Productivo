import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<button className='search-icon' size='1.3em'> <FaSearch size={15}/> </button>
            
			<input
				onChange={(e) =>
					handleSearchNote(e.target.value)
				}
				type='text'
				placeholder='search notes...'
			/>
		</div>
	);
};

export default Search;
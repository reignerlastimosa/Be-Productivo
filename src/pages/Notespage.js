import { useState, useEffect } from 'react';

import NotesList from '../components/Noteslist';
import Search from '../components/Search';

import Navbar from '../components/Navbar';
import { BsFillMoonStarsFill} from "react-icons/bs";
import { BsStars} from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";


const Notespage = ({darkMode, setDarkMode ,toggle,setToggle}) => {
	
	const [searchText, setSearchText] = useState('');

	const [notes, setNotes] = useState([
		
	]);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('notes')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem( 'notes', JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: Math.random() * 10,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode ? 'dark-mode' :'light-mode'}`}>
			<BsFillMoonStarsFill className="big-moon" size={100}/> 
			<BsStars className="star-1" size={50}/> 
			<BsStars className="star-2" size={50}/> 
			<BsStars className="star-3" size={50}/> 
			<BsStars className="star-4" size={50}/> 
			<BsStars className="star-5" size={50}/> 

			<FaSun className="big-sun" size={200}/>
			<FaCloud className="cloud-1" size={120}/>
			<FaCloud className="cloud-2" size={120}/>
			<FaCloud className="cloud-3" size={120}/>
			<FaCloud className="cloud-4" size={120}/>
			<FaCloud className="cloud-5" size={120}/>
			
			<div className='container'>
				<Navbar className="active" setDarkMode={setDarkMode} toggle={toggle} setToggle={setToggle}/>
				<div className="main-notes">  
				<h1>Save your Notes!</h1>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					addNote={addNote}
					deleteNote={deleteNote}
				/>
				</div>
			</div>
		</div>
	);
};

export default Notespage;

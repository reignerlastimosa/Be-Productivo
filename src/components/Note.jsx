


const Note = ({ id, text, date, deleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<button onClick={() => deleteNote(id)}
					className='delete-icon'
					size='1.3em'>  
					Delete
                    </button>
			</div>
		</div>
	);
};

export default Note;
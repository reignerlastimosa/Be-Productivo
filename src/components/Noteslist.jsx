import Note from './Note';
import Add from './Add';

const Noteslist = ({
	notes,
	addNote,
	deleteNote,
}) => {
	return (
		<div className='notes-list'>
			<Add addNote={addNote} />
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					deleteNote={deleteNote}
				/>
			))}
			
		</div>
	);
};

export default Noteslist;
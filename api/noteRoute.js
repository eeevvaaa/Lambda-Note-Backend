const express = require('express');
const notes = require('../data/helpers/noteModel');
const router = express.Router();
const errHelper = (status, message, res) => {
	console.log('Error');
	res.status(status).json({ error: message });
};

router.get('/', (req, res) => {
	notes
		.get()
		.then(notes => res.status(200).json(notes))
		.catch(err => errHelper(500, 'Error getting notes.', res));
});

router.post('/', (req, res) => {
	const note = req.body;
	notes
		.insert(note)
		.then(note => res.status(201).json(note))
		.catch(err => errHelper(500, 'Error posting notes.', res));
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	notes
		.getById(id)
		.then(note => {
			if (note) {
				res.status(200).json(note);
			} else {
				return errHelper(404, 'No record found.', res);
			}
		})
		.catch(err => errHelper(500, 'Error getting notes.', res));
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const { title, content } = req.body;
	const edits = { title, content };
	notes
		.update(id, edits)
		.then(edits => res.status(200).json({ success: 'Note updated.', edits }))
		.catch(err => errHelper(500, 'Error updating notes.', res));
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	notes
		.remove(id)
		.then(removed => {
			res.status(202).json({ success: 'Note has been removed', removed });
		})
		.catch(err => errHelper(500, 'Error deleting notes.', res));
});

module.exports = router;

'use strict';

/**
 *
 *
 *
 * {} []
 */

 class NotesApplication {

 	/**
	 *
	 *
	 *
	*/
    constructor(author) {
        this.authorName = author;
        this.notesList = [];
    }

    /**
	 * This method creates a new note and adds it to the list of notes for this author
	 * Argument passed in must be strictly of string type
	 *
	 * @params string note_content
	*/
    create(note_content) {
    	//Ensure that the passed in argument is of string type
        if(typeof(note_content) === 'string'){
        	this.notesList.push(note_content);
        }
        else{
        	throw new Error('Type Error: note_content is not a string');
        }
    }

    /**
	 *
	 *
	 *
	*/
    listNotes() {

    }


    /**
	 *
	 *
	 *
	*/
    get(note_id) {

    }

    /**
	 *
	 *
	 *
	*/
    search(search_text) {

    }

    /**
	 *
	 *
	 *
	*/
    delete(note_id) {

    }

    /**
	 *
	 *
	 *
	*/
    edit(note_id, new_content) {

    }

 }

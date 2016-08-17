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
    * This method list the notes taken over time by an author in the following format
    *
    * Note ID: [note_id]
    * [NOTE_CONTENT]
    *
    * By Author [author]
    *
    */
    listNotes() {
        for(let i=0; i<this.notesList.length; i++){
        	console.log('Note ID:', [i]);
        	console.log([this.notesList[i]]);
        }

        console.log('By Author /n' , this.authorName);
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

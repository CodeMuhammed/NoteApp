'use strict';

/**
 * A simple note taking application
 */
class NotesApplication {

   /**
	  * @constructor
	  */
    constructor(author) {
        this.author_name = author;
        this.notes_list = [];
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
        	this.notes_list.push(note_content);
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
        for(let i=0; i<this.notes_list.length; i++){
        	console.log('Note ID:', [i]);
        	console.log([this.notes_list[i]]);
        }

        console.log('By Author /n' , this.author_name);
    }


    /**
     * This method takes the id of a note  and returns the note content of that id
	   * Argument passed in must be strictly of int type
	   *
	   * @params int note_id
     **/
    get(note_id) {
    	//check to see if note_id is within bounds
    	if(Math.abs(note_id) < this.notes_list.length) {
        	return this.notes_list[note_id];
        }
        else{
        	throw new Error('Out of bounds error: The note_id does not exist');
        }
    }

    /**
     * This function take a search string, search_text and returns all the notes
     * with that text within it in the following format
     *
     * Showing results for search ‘[<search_text>]’
     * Note ID: [note_id]
     * [NOTE_CONTENT]
     *
     * By Author [author]
    */
    search(search_text) {
    	//Ensure that the passed in argument is of string type
        if(typeof(note_content) === 'string'){

	        //Search throught notes_list for matching pairs
	        console.log('Showing results for search ‘${search_text}’');

	        for(let i=0; i<this.notes_list.length; i++){
	        	if(this.notes_list.indexOf(search_text)){
	        		   console.log('Note ID:', [i]);
             	   console.log([this.notes_list[i]]);
	        	}
	        }

	        console.log('By Author /n' , this.author_name);
        }
        else{
        	 throw new Error('Type Error: note_content is not a string');
        }

    }

    /**
     * This method takes the id of a note  and deletes the note content of that id
  	 * Argument passed in must be strictly of int type
  	 *
  	 * @params integer note_id
     */
    delete(note_id) {
        //check to see if note_id is within bounds
    	if(Math.abs(note_id) < this.notes_list.length) {
        	this.notes_list.splice(note_id , 1);
        }
        else{
        	throw new Error('Out of bounds error: The note_id does not exist');
        }
    }

    /**
     * This method takes the id of a note and a new string and replace the old
     * note attached to a note id
     *
     * @params integer note_id
     * @params string new_content
     *
     */
    edit(note_id, new_content) {
         //Ensure that note_id is valid and make sure that the new_content is of type string
         if(Math.abs(note_id) < this.notes_list.length && typeof(note_content) === 'string') {
        	this.notes_list[note_id]  = new_content;
        }
        else{
        	throw new Error('The note_id does not exist or new_content is not a valid note');
        }
    }
}

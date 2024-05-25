const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch.js');
const Note=require('../Profile.js');
const { body, validationResult } = require('express-validator');

router.get('/fetchall', fetchuser,  async (req, res) => {
    try {
      const notes = await Note.find({user : req.user.id});
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // 2: Add a new Note , Login required
router.post('/addnote', fetchuser, async (req, res) => {
      try {
        // using destructing method of javascript for send the requested data to corresponding fields
          const { username, age,email,gender,location,image } = req.body;

          // If there are errors, return Bad request and the errors
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
          }
          //created a new note with "new" keyword
          //new note object  contain username...
          const newNote = {};
          if (username) { newNote.username = username };
          if (age) { newNote.age = age };
           //email,gender,location,image
           if (email ) { newNote.email  = email  };
           if (gender ) { newNote.gender  = gender  };
           if (location ) { newNote.location  = location  };
           if (image ) { newNote.image  = image  };
        //   let note1 = await Notebt.find({user : req.user.id});
           let note = await Note.findOneAndUpdate({email:email},req.body);
           console.log(note);

           if (!note) { 
            const note = new Note({
              username, age,email,gender,location,image, user: req.user.id
          })
          const savedNote = await note.save()
          // return the notes as the response
          res.json(savedNote);
            }
          else{
           //matching the existing user id with the login id
           if (note.email !== email) {     // checks whether the user login in is using his notes or other 
               return res.status(401).send("Not Allowed");
           }
           //find and update the data by findByIdandupdate
          // findByIdAndUpdate()
           note = await Note.findOneAndUpdate(req.params.email, { $set: newNote }, { new: true })   //sending the new note in place of the old note
           res.json({ note });
          }
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })


//get profile
router.put('/profile', fetchuser, async (req, res) => {
  try {
    console.log(req.user._id);
    console.log( req.params.id);
    const updatedData = req.body; 
    const updatedAnimal = await Note.findOneAndUpdate(
      {_id: req.params.id},
      { $set: updatedData },
      { new: true } 
    );
    if (!updatedAnimal) {
      return res.status(404).json({ error: 'animal not found' });
    }
    console.log("ProfileUpdated");
    res.status(200).json(updatedAnimal);
  } catch (error) {
    console.error('Error updating animal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

  //  3: Update . Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  try {
    console.log(req.user._id);
    console.log( req.params.id);
    const updatedData = req.body; 
    const updatedAnimal = await Note.findOneAndUpdate(
      {_id: req.params.id},
      { $set: updatedData },
      { new: true } 
    );
    if (!updatedAnimal) {
      return res.status(404).json({ error: 'animal not found' });
    }
    console.log("ProfileUpdated");
    res.status(200).json(updatedAnimal);
  } catch (error) {
    console.error('Error updating animal:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// ROUTE 4: Delete . Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
      // Find the note to be delete and delete it
      let note = await Note.findById(req.params.id);
      if (!note) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this Note
      if (note.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }

      note = await Note.findByIdAndDelete(req.params.id)
      res.json({ "Success": "Note has been deleted", note: note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})


  module.exports=router;
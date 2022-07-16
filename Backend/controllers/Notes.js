import Notes from "../models/NoteModel.js";

export const getNotes = async(req, res) => {
    try {
        const notes = await Notes.findAll({
            attributes:['id','title','note']
        });
        res.json(notes);
    } catch (error) {
        console.log(error);
    }
}

export const Note = async(req, res) => {
    const { title, note } = req.body;
    
    try {
        await Notes.create({
            title: title,
            note: note,
            
        });
        res.json({msg: "Added Note Sucessfully."});
    } catch (error) {
        console.log(error);
    }
}



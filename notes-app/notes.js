const fs = require("fs")
const chalk = require("chalk")
const getNotes = (str) => {
    return "Your notes" + str;
} 

const addNote = (title, body) => {
    const notes = loadNotes()
    const isPresent = notes.filter(x=>x.title === title)
    const dN = notes.find((x) => x.title === title)

    if (dN) {
        console.log("title already present")
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(notes)
    }
}

const saveNotes = (notes) => {
    const dJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataj = dataBuffer.toString()
        return JSON.parse(dataj)
    }
    catch (e) {
        return []
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter(x=>x.title !== title)
    if (filteredNotes.length === 0) {
        console.log(chalk.bgGreen("Note removed"))
        
    } else {
        console.log(chalk.bgRed("No note found!"))
    }
    saveNotes(filteredNotes)
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgRed("Your note:"))
    notes.forEach((note) => {
        console.log(note.title)
    })
    // console.log(notes))
}

const readNote = (title) => {
    const notes = loadNotes();
    const rN = notes.find((x) => x.title === title);
    if(rN) {
        console.log(chalk.bgGreen(rN.title));
        console.log(rN.body);
    } else {
        console.log(chalk.bgRed("No notes found"))
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
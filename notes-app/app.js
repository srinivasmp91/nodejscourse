const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js")

yargs.version("1.1.0")

yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "Note title ",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "remove a new note",
    builder: {
        title: {
            describe: "Remove title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "read",
    describe: "read a new note",
    builder: {
        title: {
            describe: "Remove title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "list all the notes",
    
    handler(argv) {
        notes.listNotes()
    }
})

yargs.parse()

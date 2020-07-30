// Dependencies
// =============================================================
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//var notes = [];
// List of Notes (DATA)
// =============================================================
// var notes = [
//   {
//     title: "Test Title",
//     text: "Test text",
//   },
//   {
//     title: "Test1 Title",
//     text: "Test1 text",
//   },
//   {
//     title: "Test2 Title",
//     text: "Test2 text",
//   },
// ];

let notes;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
/*
async function combineAnimals() {
  try {
    const animals = [];
    const files = ["dog.json", "goldfish.json", "cat.json", "hamster.json"];

    for (let file of files) {
      const fileStr = await readFileAsync(file, "utf8");

      animals.push(JSON.parse(fileStr));
    }

    const sorted = animals.sort(function (a, b) {
      return b.age - a.age;
    });

    await writeFileAsync(
      "combined.json",
      JSON.stringify(sorted, null, 2),
      "utf8"
    );

    console.log("Successfully wrote to 'combined.json' file");
  } catch (err) {
    console.log(err);
  }
}
*/
async function readDb() {
  try {
    //   const notes = [];
    const file = "./db/db.json";

    const noteStr = await readFileAsync(file, "utf8");
    console.log("json_parse", JSON.parse(noteStr));
    notes = JSON.parse(noteStr);
    console.log("notes", notes);
    // return notes;
  } catch (err) {
    console.log(err);
  }
}
// Displays all notes
app.get("/api/notes", function (req, res) {
  console.log("prior to calling readDB");
  readDb();
  res.json(notes);
});

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//             return res.json(characters[i]);
//         }
//     }

//     return res.json(false);
// });

// Create New note - takes in JSON input
app.post("/api/notes", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

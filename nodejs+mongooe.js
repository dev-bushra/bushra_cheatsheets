// NOTE BUDDY: Please put all the usfule things and in order, with readable command, and thanks :)


/***************************************************************/
// Needed NPM Packages
/***************************************************************/
axios - body-parser - cors - express - mongoose - dotenv - nodemon -express-fileupload -


/***************************************************************/
// File Structure
/***************************************************************/

// project_name/
//   ├── src/
//   |   ├── controllers/
//   |   |   ├── userController.js
//   |   |   └── ...
//   |   ├── models/
//   |   |   ├── userModel.js
//   |   |   └── ...
//   |   ├── routes/api/
//   |   |   ├── userRoutes.js
//   |   |   └── ...
//   |   └── utils/
//   |       ├── db.js
//   |       └── ...
//   ├── node_modules/
//   ├── package.json
//   ├── package-lock.json
//   ├── .env
//   ├── .gitignore
//   └── server.js/app.js

/* 
- [.env]: file contains environment variables that the application needs to run.
- [Server.js/app.js]: file is the entry point of the application that starts the server and initializes the application.
- [Routes/api]: directory contains the route files that define the application's API endpoints.
- [Models]: directory contains the model files that define the application's data schema and interact with the database.
- [Utils]: directory contains utility functions that can be used across the application.
- [Controllers]: directory contains the controller files that define the application's business logic.
*/


/***************************************************************/
// Modules
/***************************************************************/

// Modules in node is a reusable block of code to perform a specific set of tasks (variables/objects/functions/classes), and the purpose of using modules in node is to help organize code into smaller pieces.

// # Build in modules :

/* 1. OS : provide information about operating system 
const os = require('os');
const x = os.below_methods()

arch()	Returns the operating system CPU architecture
constants	Returns an object containing the operating system's constants for process signals, error cotes etc.
cpus()	Returns an array containing information about the computer's CPUs
endianness()	Returns the endianness of the CPU
EOL	Returns the end-of-line marker for the current operating system
freemem()	Returns the number of free memory of the system
hostname()	Returns the hostname of the operating system
loadavg()	Returns an array containing the load averages, (1, 5, and 15 minutes)
networkInterfaces()	Returns the network interfaces that has a network address
platform()	Returns information about the operating system's platform
release()	Returns information about the operating system's release
tmpdir()	Returns the operating system's default directory for temporary files
totalmem()	Returns the number of total memory of the system
type()	Returns the name of the operating system
uptime()	Returns the uptime of the operating system, in seconds
userInfo()	Returns information about the current user 
*/

/* 2. PATH : provides utility functions for working with file paths
const path = require('path')
const x = path.below_methods()
 
basename()	Returns the last part of a path
delimiter	Returns the delimiter specified for the platform
dirname()	Returns the directories of a path
extname()	Returns the file extension of a path
format()	Formats a path object into a path string
isAbsolute()	Returns true if a path is an absolute path, otherwise false
join()	Joins the specified paths into one
normalize()	Normalizes the specified path
parse()	Formats a path string into a path object
posix	Returns an object containing POSIX specific properties and methods
relative()	Returns the relative path from one specified path to another specified path
resolve()	Resolves the specified paths into an absolute path
sep	Returns the segment separator specified for the platform
win32	Returns an object containing Windows specific properties and methods
*/

/* 3. FS : file system operations (Reading/Writing/Deleting) 
const fs = require('fs');
const x = fs.below_methods()

// Write a File
fs.writeFile('node_cheatsheet.txt', 'node is super cool :)', (err) => {
 if (err) {
  throw new Error(err);
 } else {
  console.log('File was written successfully');
 }
})
// Read a File 
fs.readFile('node_cheatsheet.txt', 'utf8', (err, data) => {
 if (err) {
  throw new Error(err);
 } else {
  console.log('File content is:', data);
 }
})

access()	Checks if a user has access to this file or directory
accessSync()	Same as access(), but synchronous instead of asynchronous
appendFile()	Appends data to a file
appendFileSync()	Same as appendFile(), but synchronous instead of asynchronous
chmod()	Changes the mode of a file
chmodSync()	Same as chmod(), but synchronous instead of asynchronous
chown()	Changes the owner of a file
chownSync()	Same as chown(), but synchronous instead of asynchronous
close()	Closes a file
closeSync()	Same as close(), but synchronous instead of asynchronous
constants	Returns an object containing constant values for the file system
createReadStream()	Returns a new stream object
createWriteStream()	Returns a new writeable stream object
exists()	Deprecated. Checks if a file or folder exists
existsSync()	Same as exists(), but synchronous instead of asynchronous. This method is NOT deprecated
fchmod()	Changes the mode of a file
fchmodSync()	Same as fchmod(), but synchronous instead of asynchronous
fchown()	Changes the owner of a file
fchownSync()	Same as fchown(), but synchronous instead of asynchronous
fdatasync()	Syncronizes a file with the one stored on the computer
fdatasyncSync()	Same as fdatasync(), but synchronous instead of asynchronous
fstat()	Returns the status of a file
fstatSync()	Same as fstat(), but synchronous instead of asynchronous
fsync()	Syncronizes a file with the one stored on the computer
fsyncSync()	Same as fsync(), but synchronous instead of asynchronous
ftruncated()	Truncates a file
ftruncatedSync()	Same as ftruncated(), but synchronous instead of asynchronous
futimes()	Change the timestamp of a file
futimesSync()	Same as futimes(), but synchronous instead of asynchronous
lchmod()	Changes the mode of a file, for Mac OS X
lchmodSync()	Same as lchmod(), but synchronous instead of asynchronous
lchown()	Changes the owner of a file, for Mac OS X
lchownSync()	Same as lchown(), but synchronous instead of asynchronous
link()	Makes an addition name for a file. Both the old and the new name may be used
linksync()	Same as link(), but synchronous instead of asynchronous
lstat()	Returns the status of a file
lstatSync()	Same as lstat(), but synchronous instead of asynchronous
mkdir()	Makes a new directory
mkdirSync()	Same as mkdir(), but synchronous instead of asynchronous
mkdtemp()	Makes a new temporary directory
mkdtempSync()	Same as mktemp(), but synchronous instead of asynchronous
open()	Opens a file
openSync()	Same as open(), but synchronous instead of asynchronous
read()	Reads the content of a file
readdir()	Reads the content of a directory
readdirSync()	Same as readdir(), but synchronous instead of asynchronous
readFile()	Reads the content of a file
readFileSync()	Same as readFile(), but synchronous instead of asynchronous
readlink()	Reads the value of a link
readlinkSync()	Same as readlink(), but synchronous instead of asynchronous
realpath()	Returns the absolute pathname
realpathSync()	Same as realpath(), but synchronous instead of asynchronous
rename()	Renames a file
renameSync()	Same as rename(), but synchronous instead of asynchronous
rmdir()	Removes a directory
rmdirSync()	Same as rmdir(), but synchronous instead of asynchronous
stat()	Returns the status of a file
statSync()	Same as stat(), but synchronous instead of asynchronous
symlink()	Makes a symbolic name for a file
symlinkSync()	Same as symlink(), but synchronous instead of asynchronous
truncate()	Truncates a file
truncateSync()	Same as truncate(), but synchronous instead of asynchronous
unlink()	Removes a link
unlinkSync()	Same as unlink(), but synchronous instead of asynchronous
unwatchFile()	Stops watching for changes on a filename
utimes()	Change the timestamp of a file
utimesSync()	Same as utimes(), but synchronous instead of asynchronous
watch()	Watch for changes of a filename or directoryname
watchFile()	Watch for changes of a filename
write()	Writes buffer to a file
write()	Writes data to a file
writeFile()	Writes data to a file
writeFileSync()	Same as writeFile(), but synchronous instead of asynchronous
writeSync()	Same as write(); writes buffer to a file synchronous instead of asynchronous
writeSync()	Same as write(); writes data to a file synchronous instead of asynchronous
*/

/* 4. Events : provides a way of working with events.
var events = require('events');
const x = events.below_methods()

// Event Emitter
var eventEmitter = new events.EventEmitter();
eventEmitter.on('scream', function() {
    console.log('A scream is detected!');
});
eventEmitter.emit('scream');

addListener()	Adds the specified listener
defaultMaxListeners	Sets the maximum number of listeners allowed for one event. Default is 10
emit()	Call all the listeners registered with the specified name
eventNames()	Returns an array containing all registered events
getMaxListeners()	Returns the maximum number of listeners allowed for one event
listenerCount()	Returns the number of listeners with the specified name
listeners()	Returns an array of listeners with the specified name
on()	Adds the specified listener
once()	Adds the specified listener once. When the specified listener has been executed, the listener is removed
prependListener()	Adds the specified listener as the first event with the specified name
prependOnceListener()	Adds the specified listener as the first event with the specified name, once. When the specified listener has been executed, the listener is removed
removeAllListeners()	Removes all listeners with the specified name, or ALL listeners if no name is specified
removeListener()	Removes the specified listener with the specified name
setMaxListeners()	Sets the maximum number of listeners allowed for one event. Default is 10
*/

/* 5. HTTP : create http servers
var http = require('http');

const { log } = require('console');

// Create a Server Object
http.createServer(function (req, res) {
  res.write('Hello World!'); // write a response to the client
  res.end(); // end the response
}).listen(4000); // the server object listens on port 4000



/***************************************************************/
// DataBase [ Connect - Create Shema - CRUD ]
/***************************************************************/

// # A: Connect to the Database (server.js/app.js)
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

// # B:  Create Database Schema (../models/usersModel.js)
const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required.'],
        validate: [
            {
                validator: (value) => {  return value.length >= 5; },
                message: 'Email must be at least 3 characters long.',
            },
            {
                validator: (value) => { return /^[A-Za-z]+$/.test(value); },
                message: 'Name must only contain letters.',
            },
        ]
    }
})
module.exports = mongoose.model('users_schema', UsersSchema)

// # C: Insert Data into DataBase (./routes/api/users.js)
const express = require('express')
const userModel = require('../models/userModel.js')
const app = express()

// GET all users
app.get('/users', async (req, res) => {
 let users = await userModel.find({})
 res.status(201).json({
  statusL: 'ok',
  statusCode: 200,
  message: 'Users Fetched Successfully',
  data: users
 })
})

// POST document
app.post('/users', async (req, res) => {
 try {
  let email = await emailModel.create(body)
  res.status(201).json({
   status: "ok",
   statusCode: 201,
   message: "Information saved successfully.",
   data: email
  })
 } catch (error) {
  console.log(error)
  res.status(400).json({
   status: "fail",
   statusCode: 400,
   message: "Unable to save information.",
   error: error
  })
 }
})

// edit document
emailModel.findById('ID#948933', (error, document) => {
 if (error) {
  console.error(error);
  return;
 }
 
 // add the new email
 document.email = 'bushra.ebox@gmial.com';

 // save the change
 document.save((error) => {
  if (error) {
   console.error(error);
  } else {
   console.log('Document updated successfully')
  }
 });

});

// delete document 
emailModel.findByIdAndRemove('ID#948933', (error, document) => {
 if (error) {
  console.error(error);
  return;
 }

 if (document) {
  console.log('Document deleted successfully');
 } else {
  console.log('Document not found');
 }
})

// delete document 2
emailModel.deleteOne({ email: 'test@gmail.com' }, (error) => {
 if (error) {
  console.error(error)
 } else {
  console.log('Document deleted successfully')
 }
})

module.exports = router
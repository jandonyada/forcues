import { Schema, model, models } from 'mongoose'; // helps us interact with our MongoDB DB

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists, fool!'],
        required: [true, 'Email is required, fool!'],
    }, 
    username: {
        type: String,
        required: [true, 'Username is required, fool!'],
        match: [/^(?=.{4,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique, fool!"]
    },
    image: {
        type: String
    }
});

// The "models" object is provided by the Mongoose lib and stores all registered models.
// If a model called "User" already exists in the "models" object, Mongoose assigns that existing model to the "user" variable.
// This prevents redefining the model and ensures that the existing model is reused.

// If a model named "User" does NOT exist in the "models" object, the "model" function from Mongoose is called, creating a new model "User".
// The newly created model is then assigned to the "User" variable.

const User = models.User || model("User", UserSchema); // that's why we should check first in models.User. Only if it's not there, then create a new model. Because this route is called every time when the connection is established.

export default User;
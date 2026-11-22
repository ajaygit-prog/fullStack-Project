import mongoose from 'mongoose' 



const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
        type:String,
        required: true
    },

    bio: {
        type: String
    },

    profilePic: {
        type: String, // cloudinary
        required: true
    },
    isPrivate: {
        type: Boolean ,
        default: true
    },
    followersCount: {
        type: Number,
        default: 0
    },
    followingCount: {
        type: Number ,
        default: 0
    }, 
    postCount: {
        type: Number ,
        default: 0 
    }
  },
  { timestamps: true },
);


export const User = mongoose.model("User",userSchema) ;
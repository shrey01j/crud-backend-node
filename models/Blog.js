//importing the mongoose module
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let blogSchema = new Schema(
    {
        blogId:{
            type: String,
            unique: true
        },
        title:{
            type: String,
            default: 'NA'
        },
        description:{
            type: String,
            default: ''
        },
        bodyHtml:{
            type: String,
            default: ''
        },
        views:{
            type: Number,
            default: 0
        },
        upvotes:{
            type: Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: false
        },
        category:{
            type: String,
            default: ''
        },
        author:{
            type: String,
            default: 'NA'
        },
        tags:[],

        created:{
            type: Date,
            default: Date.now
        },

        lastModified:{
            type: Date,
            default: Date.now
        }
    }
)

mongoose.model('Blog',blogSchema)
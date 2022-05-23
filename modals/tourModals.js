const mongoose = require("mongoose");
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    trim : true,
  },
  duration :{
    type : Number,
    required : [true , 'a tour must have a duration']
  },
  maxGroupSize :{
    type : String ,
    required : [true , 'tour must have group size']

  },
  difficulty :{
    type : String ,
    required : [true , 'tour must have difficulty']

  },
  ratingsAvarage:{ 
    type: Number,
    default :4.5
  },
  ratingsQuantity :{
    type: Number,
    default:0
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  rating: {
    type: Number,
    default: 5.4,
  },
  priceDiscount : Number,
  summary : {
    type: String,
    trim : true,
    required : [true , 'a tour must have summary']
  },
  description: {
    type: String,
    trim : true,
  },
  imageCover : {
    type : String,
    required : [true , 'a tour must have a image cover']
  },
  images:[String],
  createdAt : {
    type : Date,
    default : Date.now()
  },
  startDates : [Date]

});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

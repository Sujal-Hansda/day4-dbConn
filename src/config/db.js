const mongoose = require("mongoose")

const connectDb = async() =>
{
  try {
      await mongoose.connect(
    "mongodb+srv://sujal28122004_db_user:sdXX9RSihdNsiwSs@cluster0.xst8kf5.mongodb.net/"
  )
  console.log("mongodb connected..."); 
  } catch (error) {
   console.log("Error while connecting db",error);
    
  }
}

module.exports = connectDb;
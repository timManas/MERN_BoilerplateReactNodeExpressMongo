import express from 'express' // You will need to add "type" : "module" in package.json
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const PORT = 5000

// Initializes the .dotenv File
dotenv.config()

const app = express() // Initialize Express

// Initializes MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1) // exit(1) - means you return with error
  }
}

connectDB() // Starts up MongoDB

app.get('/', (req, res) => {
  res.send('API is running')
})

app.listen(5000, console.log('Server is running on PORT 5000')) // Sets Port for Backend to listen too

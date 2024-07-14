import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/User';
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/ReactNative').then(
  () => { 
    console.log('Connected to MongoDB');},
).catch((err: Error) => {
  console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
  process.exit();
})
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
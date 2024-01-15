import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './src/env/.env' });


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection working!');
  } catch (error) {
    console.error('Error al conectarse con la base de datos:', error.message);
  }
};

export default connectDB;

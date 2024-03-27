import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/index.js';
import Verification from './models/verification.js';

dotenv.config();
const app = express();

const checkVerificationTable = async () => {
  try {
    await db.authenticate();
    const tableExists = await Verification.sync({ alter: false });
    console.log('Verification table status:', tableExists ? 'Exists' : 'Does not exist');
  } catch (error) {
    console.error('Error checking Verification table:', error);
  }
};

checkVerificationTable(); // Melakukan pemeriksaan tabel saat aplikasi dimulai

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));

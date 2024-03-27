import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/Database.js';


const Verification = db.define('Verification', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  birthDate: {
    type: DataTypes.DATE,
  },
  major: {
    type: DataTypes.STRING,
  },
  // ... tambahkan field lainnya sesuai kebutuhan
});

// Sinkronisasi model dengan database (jika diperlukan)
Verification.sync().then(() => {
  console.log('Verification table created successfully.');
}).catch((error) => {
  console.error('Error creating Verification table:', error);
});

export default Verification;

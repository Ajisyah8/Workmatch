import Verification from "../models/verification.js"; // Ubah penamaan impor menjadi 'Verification'

export const getVerifications = async (req, res) => {
  try {
    const verifications = await Verification.findAll({ // Menggunakan 'Verification' yang benar
      attributes: ['id', 'fullName', 'email', 'address', 'phoneNumber', 'birthDate', 'major']
    });
    res.json(verifications);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const createVerification = async (req, res) => {
    const { fullName, email, address, phoneNumber, birthDate, major } = req.body;
  
    // Pastikan fullName dan email tidak kosong atau null
    if (!fullName || !email) {
      return res.status(400).json({ msg: 'FullName and Email are required' });
    }
  
    try {
      await Verification.create({
        fullName,
        email,
        address,
        phoneNumber,
        birthDate,
        major
        // ...tambahkan field lainnya sesuai kebutuhan
      });
      res.json({ msg: 'Verification created successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Server Error' });
    }
  };

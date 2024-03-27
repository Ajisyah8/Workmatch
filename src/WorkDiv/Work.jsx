import React, {useState, useEffect}from 'react';
import Search from '../Search/Search';
import { BiTimeFive } from 'react-icons/bi';
// import logo1 from '../assets/logo1.jpeg';
import LogoIL from '../assets/IL logo hitam 2.png'
import axios from 'axios';
import jwtDecode from 'jwt-decode'
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {useAuth} from 'l'

const Data = [
  {
    id: 1,
    image: LogoIL,
    judul: 'Web Development',
    time: '9 Jam',
    location: 'Batu Aji',
    desc: 'Orang yang memiliki pengalaman luas dan pengetahuan mendalam pengembangan web',
    perusahaan: 'Infinite Learning'
  },
  {
    id: 2,
    image: LogoIL,
    judul: 'Visual Designer',
    time: '9 Jam',
    location: 'Tiban',
    desc: 'Seorang kreatif yang memiliki keahlian desain dan elemen visual untuk visual yang menarik dan efektif.',
    perusahaan: 'Infinite Learning'
  },
  {
    id: 3,
    image: LogoIL,
    judul: 'UI/UX Designer',
    time: '14 Jam',
    location: 'Nongsa',
    desc: 'Seorang UI/UX designer bertanggung jawab untuk merancang pengalaman pengguna (user experience/UX)',
    perusahaan: 'Infinite Learning'
  },
  {
    id: 4,
    image: LogoIL,
    judul: 'Mobile Development',
    time: '14 Jam',
    location: 'Nongsa',
    desc: 'Proses menciptakan aplikasi yang beroperasi di perangkat mobile seperti smartphone atau tablet',
    perusahaan: 'Infinite Learning'
  },
  {
    id: 5,
    image: LogoIL,
    judul: 'Game Development',
    time: '15 Jam',
    location: 'Nongsa',
    desc: 'Menciptakan permainan yang berjalan di berbagai platform, mulai dari perangkat mobile hingga konsol dan komputer.',
    perusahaan: 'Infinite Learning'
  },
  {
    id: 6,
    image: LogoIL,
    judul: 'Social Media Specialist',
    time: '10 Jam',
    location: 'Batam Centre',
    desc: 'Mengelola dan membangun kehadiran sebuah merek atau entitas di platform media sosial.',
    perusahaan: 'Infinite Learning'
  },
  {
    id: 7,
    image: LogoIL,
    judul: 'Public Relation',
    time: '8 Jam',
    location: 'Nongsa',
    desc: 'Bidang yang fokus pada komunikasi antara suatu entitas perusahaan atau organisasi dengan publiknya',
    perusahaan: 'NDP'
  },
  {
    id: 8,
    image: LogoIL,
    judul: 'Marketing',
    time: '12 Jam',
    location: 'Nagoya',
    desc: ' Kegiatan yang berfokus pada promosi, distribusi, dan penjualan produk atau kebutuhan serta keinginan pasar',
    perusahaan: 'Infinite Learning'
  }
];

const Work = () => {
  const [filteredData, setFilteredData] = useState(Data);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const userId = getLoggedInUserId();
  const [programsTaken, setProgramsTaken] = useState(() => {
    const programsTakenFromStorage = localStorage.getItem(`programsTaken_${userId}`);
    return programsTakenFromStorage ? JSON.parse(programsTakenFromStorage) : [];
  });
  const [biodata, setBiodata] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const programsTakenFromStorage = localStorage.getItem(`programsTaken_${userId}`);
    if (programsTakenFromStorage) {
      setProgramsTaken(JSON.parse(programsTakenFromStorage));

      const verifiedDataFromStorage = localStorage.getItem('verifiedData');
      if (verifiedDataFromStorage) {
        setBiodata(JSON.parse(verifiedDataFromStorage));
        localStorage.removeItem('verifiedData');
      }
    }
    refreshToken();
  }, []);

  function getLoggedInUserId() {
    return localStorage.getItem('userId');
  }

  const handleProgramTaken = (programId) => {
    const updatedProgramsTaken = [...programsTaken, programId];
    setProgramsTaken(updatedProgramsTaken);
    localStorage.setItem(`programsTaken_${userId}`, JSON.stringify(updatedProgramsTaken));
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  const handleSearch = (searchTerms) => {
    const result = Data.filter((data) =>
      data.judul.toLowerCase().includes(searchTerms.work.toLowerCase()) &&
      data.perusahaan.toLowerCase().includes(searchTerms.perusahaan.toLowerCase()) &&
      data.location.toLowerCase().includes(searchTerms.lokasi.toLowerCase())
    );
    setFilteredData(result);
  };

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      localStorage.removeItem('account');
      localStorage.removeItem(`programsTaken_${userId}`);
      setProgramsTaken([]);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <h1 className='container mt-5 mb-5 text-3xl font-semibold text-gray-800'>Hai {name}</h1>
    <button className='mt-5 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={Logout}>
      Logout
    </button>
    <Search onSearch={handleSearch} />
    <div className='workContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center py-10'>
      {filteredData.map(({ id, image, judul, time, location, desc, perusahaan }) => (
        <div
          key={id}
          className='group singleJob rounded-lg p-6 shadow-md hover:shadow-lg hover:shadow-gray-500 bg-white'
        >
          <h1 className='text-lg font-semibold text-gray-800'>{judul}</h1>
          <span className='text-sm flex items-center text-gray-600'>
            <BiTimeFive className='text-gray-500' />
            {time}
          </span>
          <h6 className='text-gray-600'>{location}</h6>
          <p className='text-sm text-gray-700 pt-4 border-t mt-4'>{desc}</p>
          <div className='company flex items-center gap-2 mt-4'>
            <img src={image} alt="IL" className='w-10' />
            <span className='text-sm text-gray-700 py-1 block'>{perusahaan}</span>
          </div>
          <button
            className='border-2 rounded-lg py-2 px-4 w-full text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 mt-4'
            disabled={programsTaken.includes(id)}
            onClick={() => {
              if (!token) {
                // Jika pengguna belum masuk, arahkan mereka ke halaman login
                navigate('/login');
              } else {
                // Jika pengguna sudah masuk, izinkan mereka untuk mengambil program
                handleProgramTaken(id);
                navigate('/verification');
              }
            }}
          
          >
            {programsTaken.includes(id) ? 'Program Diambil' : 'Ambil'}
          </button>
        </div>
      ))}
    </div>
  </div>
);
};

export default Work;
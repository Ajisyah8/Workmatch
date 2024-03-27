import React from 'react';
import InfiniteLearningImage from '../assets/IL logo hitam 2.png'

const Perusahaan = () => {
  return (
    <div className="container mx-auto mt-8 p-8">
      <div className="flex items-center justify-center mb-8">
        <img src={InfiniteLearningImage} alt="Infinite Learning" className="w-32 h-32 rounded-full" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Infinite Learning</h1>
      <p className="text-lg text-gray-700 mb-6">
      Infinite Learning, sebuah divisi dari PT Kinema Systrans multimedia (anak perusahaan dari Infinite Studios), berpusat pada pengembangan kursus pelatihan kejuruan yang relevan dengan aktivitas Infinite Studios dan meningkatnya permintaan bakat terampil dalam ekosistem Nongsa Digital Park.
      </p>
      <p className="text-lg text-gray-700 mb-6">
      Memperluas operasi pelatihan internalnya saat ini, Infinite Learning pada tahun 2018 telah memperoleh lisensi LPK dari Kementerian Tenaga Kerja Indonesia. Hal ini memungkinkan mereka untuk melaksanakan kursus pelatihan kejuruan yang terbuka untuk umum, yang dapat digunakan bekerja sama dengan lembaga pendidikan lokal dan internasional
      </p>
      <p className="text-lg text-gray-700 mb-6">
      Saat ini, kegiatan Pendidikan Vokasi dilakukan di bawah lisensi LPK untuk pelatihan di Nongsa Digital Park (NDP), bekerja sama dengan Apple Developer Academy, Royal Melbourne Institute of Technology Cyber Security Course, Program Studi Mandiri Kementerian Pendidikan.
      </p>
    </div>
  );
};

export default Perusahaan;

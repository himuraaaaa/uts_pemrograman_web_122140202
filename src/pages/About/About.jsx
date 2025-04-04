import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Selamat datang di BookFinder, mitra terpercaya Anda dalam menemukan buku terbaik untuk setiap kesempatan. Kami percaya bahwa buku memiliki kekuatan untuk mengubah hidup, memicu kreativitas, dan membuka pintu menuju dunia baru.

Di BookFinder, kami mempermudah pencarian buku dengan menawarkan alat intuitif untuk menjelajahi genre, penulis, dan topik yang Anda minati. Baik Anda seorang pembaca santai, pecinta buku sejati, atau seseorang yang mencari referensi akademik, platform kami dirancang dengan kebutuhan Anda dalam pikiran.

Misi kami adalah menghubungkan Anda dengan cerita yang menginspirasi dan pengetahuan yang memberdayakan. Kami berkomitmen untuk menciptakan pengalaman yang menarik dan ramah pengguna sehingga perjalanan Anda ke dunia buku menjadi menyenangkan.

Mari bersama merayakan keajaiban buku dan temukan bacaan hebat berikutnya hari ini!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

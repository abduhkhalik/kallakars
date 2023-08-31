import Pic from "../../assets/Pak Hasanudin.jpeg";

const About = () => {
  return (
    <section className="py-16 bg-slate-200">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-5">
            <div className="w-full lg:w-1/2">
              <img src={Pic} className="rounded-xl" alt="Sultan Hasanudin" />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">About Us</h1>

              <div className="text-base">
                <h2 className="text-lg font-bold my-5">
                  {" "}
                  Selamat datang di Kalla Kars Palu!{" "}
                </h2>
                <p className="text-slate-700 mb-5">
                  Kami dengan bangga menyambut Anda di halaman web resmi Kalla
                  Kars untuk wilayah Palu. Kami adalah destinasi utama Anda
                  untuk menemukan koleksi terbaik dari tiga merek motor
                  terkemuka: Benelli, Keeway, dan United. Dengan komitmen kami
                  untuk memberikan layanan terbaik dan produk berkualitas, kami
                  bersemangat untuk menjadi mitra perjalanan Anda dalam
                  menjelajahi dunia sepeda motor. Kami memahami bahwa sebuah
                  motor adalah lebih dari sekadar kendaraan. Ini adalah cerminan
                  gaya hidup Anda, kebebasan Anda, dan hasrat Anda. Oleh karena
                  itu, kami berusaha keras untuk menyediakan beragam pilihan
                  model dan varian untuk memenuhi berbagai kebutuhan dan selera
                  Anda. Setiap motor yang kami tawarkan telah melewati pengujian
                  ketat untuk memastikan kualitas, keamanan, dan performa
                  terbaik. Di Kalla Kars Kota Palu, kami tidak hanya menjual
                  motor, tetapi juga menghadirkan pengalaman yang tak
                  terlupakan. Kami memiliki tim profesional yang siap membantu
                  Anda memilih motor yang paling sesuai dengan kebutuhan Anda.
                  Kami juga menyediakan layanan purna jual yang andal, termasuk
                  perawatan berkala, suku cadang asli, dan perbaikan. Kami
                  berkomitmen untuk menjaga standar kualitas tertinggi dalam
                  semua aspek bisnis kami, dari produk hingga layanan pelanggan.
                  Kepercayaan Anda adalah aset terbesar kami, dan kami akan
                  terus bekerja keras untuk mempertahankannya. Jelajahi halaman
                  web kami dengan bebas untuk melihat koleksi lengkap kami dan
                  temukan motor yang akan menjadi sahabat setia Anda di jalan.
                  Kami selalu siap untuk menjawab pertanyaan Anda dan memberikan
                  bantuan. Kami mengucapkan terima kasih atas kunjungan Anda,
                  dan kami berharap dapat menyambut Anda di showroom kami di
                  Kota Palu. Selamat berbelanja, selamat menjelajahi, dan
                  selamat berkendara dengan motor impian Anda!
                </p>
                <div>
                  <span className="font-bold">Hormat kami,</span> <hr/>
                  <span className="font-semibold">Muhammad Hasanuddin Muchlis</span> <hr/>
                  <span className="underline"><em>Branch Manager Kalla Kars cabang Palu.</em></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

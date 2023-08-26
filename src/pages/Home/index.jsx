import { pramuka } from "../../assets/img";
import CountUp from "react-countup";
import { VscOrganization as IcOrgn } from "react-icons/vsc";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import { GiPineTree as IcTree } from "react-icons/gi";
import { FaTrophy as IcTrophy } from "react-icons/fa";
import VisiMisiComponent from "../../components/VisiMisi";
import GuruComponent from "../../components/Guru";
import { Icon } from "@iconify/react";
import EkstrakurikulerComponent from "../../components/Ekskul";
import BeritaComponent from "../../components/Berita";
import PrestasiComponent from "../../components/Prestasi";
import AgendaComponent from "../../components/Agenda";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_HOST } from "../../utils/API/api";

const Home = () => {
    const [berita, setBerita] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const [prestasi, setPrestasi] = useState([]);
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const deskripsiSekolah =
        "Selamat datang di halaman profil SDN Banyuroto 1. Sejak berdiri pada tahun 1961, kami telah menjalankan komitmen kami untuk memberikan pendidikan unggul kepada para generasi penerus. Dengan bangga kami menyambut siswa-siswi yang bersemangat serta guru, staf, dan karyawan yang berdedikasi. Kami mengundang Anda untuk menjelajahi lebih lanjut tentang SDN Banyuroto 1, tempat di mana pembelajaran dan pengembangan diri berkolaborasi dalam harmoni. <br/><br/> SDN Banyuroto 1 telah tumbuh menjadi 11 rombongan belajar yang siap mewujudkan potensi anak-anak. Kami mengajarkan nilai-nilai luhur melalui pembiasaan seperti hafalan surat-surat pendek, doa-doa harian, dzikir pagi, dan materi dasar kepramukaan serta gerakan PBB pada apel pagi. Di dalam kelas, kami merawat semangat nasionalisme dengan menyanyikan lagu-lagu nasional dan daerah, serta melafalkan Asmaul Husna bersama-sama. <br/><br/> Setiap Jumat, anak-anak kami mengambil bagian dalam infaq setelah kegiatan senam bersama, menumbuhkan jiwa sosial dan kepedulian. Kami juga melibatkan mereka dalam Jumat Bersih, di mana mereka aktif membersihkan lingkungan sekolah untuk menumbuhkan kesadaran ekologis sejak dini. <br/><br/> SDN Banyuroto 1 adalah staf pelaksana Program Organisasi Sekolah Penggerak di bawah naungan Yayasan Ircos Indonesia, menunjukkan komitmen kami terhadap pendidikan holistik. Selain itu, kami juga bangga telah merintis perjalanan menjadi sekolah adiwiyata, mendorong kesadaran lingkungan di kalangan siswa dan lingkungan sekitar. Terima kasih atas kunjungan Anda, dan mari bersama kami membangun masa depan yang cerah bagi generasi penerus! <br/><br/> Di SDN Banyuroto 1, kami menawarkan beragam ekstrakurikuler yang berfokus pada pengembangan potensi siswa. Ekstrakurikuler wajib Pramuka membentuk karakter dan kemandirian, sementara pilihan lainnya seperti Seni Karawitan, Olahraga, Tilawah, dan Komputer memberikan kesempatan kepada siswa untuk mengeksplor bakat dan minat mereka. <br/><br/> Lingkungan belajar kami mencakup 12 ruang kelas yang nyaman, ruang guru untuk kolaborasi, serta ruang Kepala Sekolah untuk diskusi dan pengambilan keputusan. Perpustakaan kami melengkapi pengetahuan siswa, sedangkan gazebo dan lapangan olahraga menjadi tempat yang ideal untuk beraktivitas fisik dan rekreasi. <br/><br/> Kami juga mengutamakan kesehatan siswa dengan menyediakan ruang UKS yang siap memberikan perawatan dan layanan kesehatan. Fasilitas toilet siswa sebanyak 9 dan toilet guru sebanyak 2 menjamin kenyamanan dan kebersihan. Sementara itu, dapur kami memastikan penyediaan makanan yang sehat dan bermutu. <br/><br/> Di samping itu, SDN Banyuroto 1 juga memiliki tempat parkir yang aman, mushola untuk kegiatan religius, dan ruang kesenian untuk menggali kreativitas siswa. Semua ini kami lakukan untuk menciptakan lingkungan belajar yang holistik dan inspiratif bagi perkembangan siswa secara menyeluruh.";

    useEffect(() => {
        axios
            .get(`${API_HOST.url}/landing-page`)
            .then((response) => {
                setBerita(response.data.berita);
                setAgenda(response.data.agenda);
                setPrestasi(response.data.prestasi);
            })
            .catch((error) => {
                console.error("Error fetching prestasi:", error);
            });
    }, []);
    return (
        <>
            <section
                id="hero"
                className="d-flex justify-content-center align-items-center">
                <div
                    className="container position-relative"
                    data-aos="zoom-in"
                    data-aos-delay="100">
                    <h1>
                        Selamat Datang di
                        <br />
                        SD NEGERI BANYUROTO 1
                    </h1>
                    <h2>
                        BERIMAN DAN BERTAQWA, AKTIF, KREATIF, BERINTEGRITAS,
                        BERWAWASAN LUAS, PEDULI TERHADAP LINGKUNGAN DAN UNGGUL
                        DALAM PRESTASI AKADEMIK DAN NON AKADEMIK
                    </h2>
                </div>
            </section>

            <main id="main">
                <VisiMisiComponent />
                <section id="counts" className="counts section-bg">
                    <div className="container">
                        <div className="row counters">
                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="248"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Siswa</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="19"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Guru, Staff dan Karyawan</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="5"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Ekstrakurikuler</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="12"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Ruang Kelas</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="container d-flex justify-content-center"
                    data-aos="fade-up">
                    <iframe
                        width="800"
                        height="500"
                        src="https://www.youtube.com/embed/T7qQ6ld33o4"
                        title="YouTube video Profil SD NEGERI 1 BANYUROTO"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </section>

                <section id="why-us" className="why-us mb-3">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3> Website SD Negeri Banyuroto 1</h3>
                                    {isReadMore ? (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: deskripsiSekolah.slice(
                                                    0,
                                                    450
                                                ),
                                            }}></div>
                                    ) : (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: deskripsiSekolah,
                                            }}></div>
                                    )}
                                    <div
                                        onClick={toggleReadMore}
                                        className="read-or-hide ms-2  text-center">
                                        {isReadMore ? (
                                            <span className="more-btn">
                                                Selanjutnya
                                                <i className="ms-3">
                                                    <Arrow />
                                                </i>
                                            </span>
                                        ) : (
                                            <span className="more-btn">
                                                Sembunyikan
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-8 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="100">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="card-why icon-box mt-4 mt-xl-0 shadow">
                                                <i className="bx">
                                                    <IcOrgn />
                                                </i>
                                                <h4>
                                                    Program Organisasi Penggerak
                                                </h4>
                                                <p>
                                                    Sebagai bagian dari Program
                                                    Organisasi Sekolah Penggerak
                                                    di bawah naungan Yayasan
                                                    IRCOS Indonesia, sekolah ini
                                                    menjadi mercu tanda
                                                    inspirasi dan pembelajaran
                                                    yang tak terbatas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="card-why icon-box mt-4 mt-xl-0 shadow">
                                                <i className="bx">
                                                    <IcTree />
                                                </i>
                                                <h4>Sekolah Adiwiyata</h4>
                                                <p>
                                                    Telah menjadi pionir dalam
                                                    merintis perjalanan menuju
                                                    keberlanjutan dengan menjadi
                                                    sekolah Adiwiyata. Setiap
                                                    langkah kecil di dalamnya
                                                    adalah jejak menuju
                                                    lingkungan yang lebih hijau
                                                    dan berkelanjutan
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="card-why icon-box mt-4 mt-xl-0 shadow">
                                                <i className="bx">
                                                    <IcTrophy />
                                                </i>
                                                <h4>
                                                    Sekolah Mengukir Prestasi
                                                </h4>
                                                <p>
                                                    Telah mengukir banyak
                                                    prestasi dalam berbagai
                                                    bidang. Prestasi ini tidak
                                                    hanya menghiasi sejarah
                                                    sekolah, tetapi juga
                                                    mencerminkan dedikasi dan
                                                    usaha keras seluruh siswa
                                                    dan guru
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="features mt-5 pt-2">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Pembiasaan</h2>
                            <p>Kegiatan Rutinan</p>
                        </div>
                        <div
                            className="row"
                            data-aos="zoom-in"
                            data-aos-delay="100">
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="arcticons:al-quran-indonesia"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Hafalan Surat Pendek
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <Icon
                                        icon="fa-solid:pray"
                                        color="#75c2f6"
                                        width={30}
                                        height={30}
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Doa Sehari-hari
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <Icon
                                        icon="material-symbols:prayer-times-outline"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Dzikir Pagi
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <img
                                        src={pramuka}
                                        alt="icon pramuka"
                                        width={30}
                                        height={30}
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Materi Kepramukaan
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="pepicons-print:people"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Materi Gerakan PBB
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="mdi:donation"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Infaq Senin - Jumat
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="clarity:list-line"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Menyanyikan Lagu Daerah
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="mdi:religion-islamic"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Melafalkan Asmaul Husna
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="kegiatan-end d-flex justify-content-center">
                                <div className="col-lg-3 col-md-4 mt-4 me-4">
                                    <div className="icon-box">
                                        <Icon
                                            icon="ic:outline-sports-gymnastics"
                                            color="#75c2f6"
                                            width="30"
                                            height="30"
                                        />
                                        <h3>
                                            <a className="ms-3" href="">
                                                Senam Jumat
                                            </a>
                                        </h3>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 mt-4 me-4">
                                    <div className="icon-box">
                                        <Icon
                                            icon="twemoji:flag-indonesia"
                                            color="#75c2f6"
                                            width="30"
                                            height="30"
                                        />
                                        <h3>
                                            <a className="ms-3" href="">
                                                Menyanyikan Lagu Nasional
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <Icon
                                            icon="arcticons:avg-cleaner"
                                            color="#75c2f6"
                                            width="30"
                                            height="30"
                                        />
                                        <h3>
                                            <a className="ms-3" href="">
                                                Kegiatan Jumat Bersih
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <EkstrakurikulerComponent eksk={1} />
                <PrestasiComponent dataPrestasi={prestasi} prestasi={1} />

                <BeritaComponent dataBerita={berita} berita={3} />
                <GuruComponent guru={4} />
                <AgendaComponent dataAgenda={agenda} agenda={3} />
            </main>
        </>
    );
};

export default Home;

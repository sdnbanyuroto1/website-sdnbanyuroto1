// import { trainer1, trainer2, trainer3 } from "../../assets/img";
import GuruComponent from "../../components/Guru";
import StaffComponent from "../../components/Staff";

const Guru = () => {
    return (
        <>
            <main id="main" data-aos="fade-in">
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2 className="mb-3">
                            Guru, Karyawan dan Staff Sekolah
                        </h2>
                        <p className="ms-5 me-5">
                            Para Guru, Karyawan, dan Staf Sekolah merupakan
                            tiang kuat di balik keberhasilan pendidikan kami.
                            Guru-guru kami, dengan dedikasi dan pengetahuan yang
                            luas, membimbing siswa menuju prestasi akademik dan
                            perkembangan pribadi yang holistik. Karyawan dan
                            Staff kami, dari berbagai bidang, bekerja sama untuk
                            memastikan operasional harian berjalan lancar,
                            menciptakan lingkungan yang aman dan nyaman bagi
                            semua.
                        </p>
                    </div>
                </div>
                <GuruComponent guru={null} />
                <StaffComponent staff={null} />
            </main>
        </>
    );
};

export default Guru;

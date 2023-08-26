import VisiMisiComponent from "../../components/VisiMisi";
const VisiMisi = () => {
    return (
        <>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2 className="mb-3">Visi Misi Sekolah</h2>
                    <p className="ms-5 me-5">
                        Visi sekolah adalah pandangan inspiratif tentang tujuan
                        jangka panjang yang ingin dicapai oleh sekolah kami.
                        Misi sekolah adalah komitmen nyata kami untuk tindakan
                        konkret dalam mencapai tujuan tersebut. Temukan lebih
                        lanjut tentang arah dan tujuan pendidikan kami melalui
                        bagian Visi Misi di bawah ini
                    </p>
                </div>
            </div>
            <VisiMisiComponent />
        </>
    );
};

export default VisiMisi;

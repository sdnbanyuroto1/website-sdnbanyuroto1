import PropTypes from "prop-types";
import CardBerita from "../CardBerita";
import HeaderSection from "../HeaderSection";
import format from "date-fns/format/index.js";
import idLocale from "date-fns/locale/id/index.js";

const BeritaComponent = ({ berita, dataBerita }) => {
    const totalBerita = berita;
    return (
        <section id="popular-beritas" className="beritas">
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title="Berita & Artikel"
                    title1="Berita & Artikel Sekolah"
                    total={totalBerita}
                    lihatsemua="Lihat semua berita & artikel"
                    to="berita-artikel"
                />

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totalBerita !== null
                        ? dataBerita.map((item, index) => {
                              const tgl_pub = format(
                                  new Date(item.tanggal_publikasi),
                                  "dd MMMM yyyy, HH:mm",
                                  {
                                      locale: idLocale,
                                  }
                              );
                              if (index < 3) {
                                  return (
                                      <CardBerita
                                          key={item._id}
                                          id={item._id}
                                          title={item.judul}
                                          jenis={item.jenis}
                                          foto={item.imageUrl}
                                          deskripsi={item.deskripsi}
                                          tgl_publikasi={tgl_pub}
                                      />
                                  );
                              }
                          })
                        : dataBerita.map((item) => {
                              const tgl_pub = format(
                                  new Date(item.tanggal_publikasi),
                                  "dd MMMM yyyy, HH:mm",
                                  {
                                      locale: idLocale,
                                  }
                              );
                              return (
                                  <CardBerita
                                      key={item._id}
                                      id={item._id}
                                      title={item.judul}
                                      jenis={item.jenis}
                                      foto={item.imageUrl}
                                      deskripsi={item.deskripsi}
                                      data={item}
                                      tgl_publikasi={tgl_pub}
                                  />
                              );
                          })}
                </div>
            </div>
        </section>
    );
};
BeritaComponent.propTypes = {
    berita: PropTypes.any,
    dataBerita: PropTypes.array,
};

export default BeritaComponent;

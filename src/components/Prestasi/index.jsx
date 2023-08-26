import PropTypes from "prop-types";
import CardPrestasi from "../CardPrestasi";
import HeaderSection from "../HeaderSection";
const PrestasiComponent = ({ prestasi, dataPrestasi }) => {
    const totalPrestasi = prestasi;
    return (
        <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title="Prestasi"
                    title1="Prestasi Sekolah"
                    total={totalPrestasi}
                    lihatsemua="Lihat semua prestasi"
                    to="prestasi"
                />

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totalPrestasi !== null
                        ? dataPrestasi.map((item, index) => {
                              if (index < 4) {
                                  return (
                                      <CardPrestasi
                                          key={item._id}
                                          title={item.judul}
                                          foto={item.imageUrl}
                                          deskripsi={item.deskripsi}
                                      />
                                  );
                              }
                          })
                        : dataPrestasi.map((item) => {
                              return (
                                  <CardPrestasi
                                      key={item._id}
                                      title={item.judul}
                                      foto={item.imageUrl}
                                      deskripsi={item.deskripsi}
                                  />
                              );
                          })}
                </div>
            </div>
        </section>
    );
};

PrestasiComponent.propTypes = {
    prestasi: PropTypes.any,
    dataPrestasi: PropTypes.array,
};

export default PrestasiComponent;

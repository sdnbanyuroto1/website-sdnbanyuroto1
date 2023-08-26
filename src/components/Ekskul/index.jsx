import PropTypes from "prop-types";
import dataEkstrakurikuler from "../../assets/data/ekstra";
import CardEkskul from "../CardEskul";
import HeaderSection from "../HeaderSection";
const EkstrakurikulerComponent = ({ eksk }) => {
    const totaleks = eksk;
    return (
        <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title="Ekstrakurikuler"
                    title1="Ekstrakurikuler Sekolah"
                    total={totaleks}
                    lihatsemua="Lihat semua ekstrakurikuler"
                    to="ekstrakurikuler"
                />
                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totaleks !== null
                        ? dataEkstrakurikuler.map((item, index) => {
                              if (index < 3) {
                                  return (
                                      <CardEkskul
                                          key={item.nama}
                                          foto={item.foto}
                                          title={item.nama}
                                          deskripsiLengkap={
                                              item.deskripsiLengkap
                                          }
                                      />
                                  );
                              }
                          })
                        : dataEkstrakurikuler.map((item) => {
                              return (
                                  <CardEkskul
                                      key={item.nama}
                                      foto={item.foto}
                                      title={item.nama}
                                      deskripsiLengkap={item.deskripsiLengkap}
                                  />
                              );
                          })}
                </div>
            </div>
        </section>
    );
};
EkstrakurikulerComponent.propTypes = {
    eksk: PropTypes.any,
};

export default EkstrakurikulerComponent;

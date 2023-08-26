import dataGuru from "../../assets/data/guru";
import CardGuru from "../CardGuru";
import PropTypes from "prop-types";
import HeaderSection from "../HeaderSection";
const GuruComponent = ({ guru }) => {
    const totalGuru = guru;
    return (
        <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title="Guru"
                    title1="Guru Sekolah"
                    total={totalGuru}
                    lihatsemua="Lihat semua guru"
                    to="guru"
                />

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totalGuru !== null
                        ? dataGuru.map((item, index) => {
                              if (index < 4) {
                                  return (
                                      <CardGuru
                                          key={item.nama}
                                          foto={item.foto}
                                          nama={item.nama}
                                          jabatan={item.jabatan}
                                          deskripsi={item.deskripsi}
                                      />
                                  );
                              }
                          })
                        : dataGuru.map((item) => {
                              return (
                                  <CardGuru
                                      key={item.nama}
                                      foto={item.foto}
                                      nama={item.nama}
                                      jabatan={item.jabatan}
                                      deskripsi={item.deskripsi}
                                  />
                              );
                          })}
                </div>
            </div>
        </section>
    );
};

GuruComponent.propTypes = {
    guru: PropTypes.any,
};

export default GuruComponent;

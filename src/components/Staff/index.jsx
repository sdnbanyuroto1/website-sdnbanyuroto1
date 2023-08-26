import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import dataStaff from "../../assets/data/staff";
import PropTypes from "prop-types";
import CardStaff from "../CardStaff";
const StaffComponent = ({ staff }) => {
    const totalStaff = staff;
    return (
        <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
                <div
                    className="section-title-header d-flex flex-row justify-content-between align-items-center pb-3"
                    data-aos="fade-up">
                    <div className="section-title">
                        <h2>Karyawan & Staff</h2>
                        <p>Karyawan & Staff Sekolah</p>
                    </div>
                    {totalStaff !== null && (
                        <div className="">
                            <a className="btn-lihat-semua" href="/guru">
                                Lihat semua guru <Arrow />
                            </a>
                        </div>
                    )}
                </div>
                <div
                    className="row d-flex justify-content-center align-items-center"
                    data-aos="zoom-in"
                    data-aos-delay="100">
                    {totalStaff !== null
                        ? dataStaff.map((item, index) => {
                              if (index < 4) {
                                  return (
                                      <CardStaff
                                          key={item.nama}
                                          foto={item.foto}
                                          nama={item.nama}
                                          jabatan={item.jabatan}
                                          deskripsi={item.deskripsi}
                                      />
                                  );
                              }
                          })
                        : dataStaff.map((item) => {
                              return (
                                  <CardStaff
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

StaffComponent.propTypes = {
    staff: PropTypes.any,
};

export default StaffComponent;

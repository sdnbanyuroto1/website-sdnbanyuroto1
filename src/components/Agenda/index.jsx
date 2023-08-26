import PropTypes from "prop-types";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import CardAgenda from "../CardAgenda";
import format from "date-fns/format/index.js";
import idLocale from "date-fns/locale/id/index.js";
import { NavLink } from "react-router-dom";

const AgendaComponent = ({ agenda, dataAgenda }) => {
    const totalAgenda = agenda;
    return (
        <section id="popular-beritas" className="beritas">
            <div className="container" data-aos="fade-up">
                <div
                    className="section-title-header d-flex flex-column justify-content-between align-items-center pb-3"
                    data-aos="fade-up">
                    <div className="section-title mb-3">
                        <p>Agenda Sekolah</p>
                    </div>
                    {totalAgenda !== null && (
                        <div className="section-lihat-semua">
                            <NavLink
                                className="btn-lihat-semua"
                                to="/agenda"
                                end>
                                Lihat semua agenda <Arrow />
                            </NavLink>
                        </div>
                    )}
                </div>

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totalAgenda !== null
                        ? dataAgenda.map((item, index) => {
                              const jadwal = format(
                                  new Date(item.jadwal),
                                  "dd MMMM yyyy, HH:mm",
                                  {
                                      locale: idLocale,
                                  }
                              );
                              if (index < 3) {
                                  return (
                                      <CardAgenda
                                          key={item._id}
                                          id={item._id}
                                          judul={item.judul}
                                          deskripsi={item.deskripsi}
                                          jadwal={jadwal}
                                          foto={item.imageUrl}
                                      />
                                  );
                              }
                          })
                        : dataAgenda.map((item) => {
                              const jadwal = format(
                                  new Date(item.jadwal),
                                  "dd MMMM yyyy, HH:mm",
                                  {
                                      locale: idLocale,
                                  }
                              );
                              return (
                                  <CardAgenda
                                      key={item._id}
                                      id={item._id}
                                      judul={item.judul}
                                      deskripsi={item.deskripsi}
                                      jadwal={jadwal}
                                      foto={item.imageUrl}
                                  />
                              );
                          })}
                </div>
            </div>
        </section>
    );
};
AgendaComponent.propTypes = {
    agenda: PropTypes.any,
    dataAgenda: PropTypes.array,
};

export default AgendaComponent;

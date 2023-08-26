import { NavLink } from "react-router-dom";
import { logo } from "../../assets/img";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <NavLink to="/">
                                    <img
                                        className="mb-3"
                                        src={logo}
                                        width={250}
                                        alt="Logo SD Negeri Banyuroto 1"
                                    />
                                </NavLink>
                                <p>
                                    Dusun Garon <br />
                                    Desa Banyuroto, Kecamatan Sawangan,
                                    <br />
                                    Kabupaten Magelang, Jawa Tengah 56481
                                    <br />
                                    <br />
                                    <strong>Nomor HP:</strong> +62 81328772265
                                    <br />
                                    <strong>Email: </strong>
                                    banyurotosiji@gmail.com
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Link Website</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/" end>
                                            Beranda
                                        </NavLink>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/berita-artikel" end>
                                            Berita & Artikel
                                        </NavLink>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/agenda" end>
                                            Agenda
                                        </NavLink>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/kontak" end>
                                            Kontak
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Link Profil</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/guru" end>
                                            Guru
                                        </NavLink>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/visi-misi" end>
                                            Visi Misi
                                        </NavLink>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/prestasi" end>
                                            Prestasi
                                        </NavLink>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <NavLink to="/ekstrakurikuler" end>
                                            Ekstrakurikuler
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright
                            <strong>
                                <span> SD Negeri Banyuroto 1</span>
                            </strong>
                            . All Rights Reserved
                        </div>
                        <div className="credits">By Mahasiswa KKN UII 67</div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a
                            href="https://www.instagram.com/sdnbanyuroto1swg/"
                            target="_blank"
                            rel="noreferrer"
                            className="instagram">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/@sdnbanyuroto1598"
                            target="_blank"
                            rel="noreferrer"
                            className="youtube">
                            <i className="bx bxl-youtube"></i>
                        </a>
                        <a
                            href="https://wa.me/+6281328772265"
                            className="wa"
                            target="_blank"
                            rel="noreferrer">
                            <i className="bx bxl-whatsapp"></i>
                        </a>
                        <a
                            href="mailto:banyurotosiji@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="gmail">
                            <i className="bx bxl-gmail"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

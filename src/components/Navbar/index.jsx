import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { AiFillInstagram as Ig, AiFillYoutube as Yt } from "react-icons/ai";
import { MdEmail as Email } from "react-icons/md";
import { logo } from "../../assets/img";

const Navbar = () => {
    const [navbarMobile, setNavbarMobile] = useState(false);
    const [navbarDropdown, setNavbarDropdown] = useState(false);
    const [navbarDropdownGaleri, setNavbarDropdownGaleri] = useState(false);

    const toggleNavbar = () => {
        setNavbarMobile(!navbarMobile);
    };
    const navButton = () => {
        setNavbarMobile(false);
    };
    const dropdownButton = () => {
        if (navbarMobile === true) {
            setNavbarDropdown(!navbarDropdown);
        }
    };
    const dropdownGaleriButton = () => {
        if (navbarMobile === true) {
            setNavbarDropdownGaleri(!navbarDropdownGaleri);
        }
    };

    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        let heightToHideFrom = 150;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };
    return (
        <header id="header" className="sticky-top">
            {isVisible && (
                <div id="hide" className={styles.headertop}>
                    <div className={`container `}>
                        <div
                            className={`contact_nav ${styles.headertopcontainer}`}>
                            <div className="contact-nav-item">
                                <a
                                    className="me-4 text-white"
                                    href="https://wa.me/+6281328772265"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i aria-hidden="true">
                                        <Phone />
                                    </i>

                                    <span className="text-white ms-2">
                                        +62 81328772265
                                    </span>
                                </a>
                                <a
                                    className="me-4 text-white"
                                    href="mailto:banyurotosiji@gmail.com">
                                    <Email />

                                    <span className="text-white ms-2">
                                        banyurotosiji@gmail.com
                                    </span>
                                </a>
                            </div>
                            <div className="social-nav">
                                <div className="social_box">
                                    <a
                                        href="https://www.instagram.com/sdnbanyuroto1swg/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="me-3 text-white">
                                        <Ig />
                                        <span className="ms-2 text-white">
                                            @sdnbanyuroto1swg
                                        </span>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@sdnbanyuroto1598"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white">
                                        <Yt />
                                        <span className="ms-2">
                                            SDN Banyuroto 1
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container pt-3 pb-3 d-flex align-items-center">
                <NavLink className="logo me-auto" to="/" end>
                    <img className="me-2" src={logo} alt="logo sekolah" />
                </NavLink>

                <nav
                    id="navbar"
                    className={`navbar navbar-expand-lg order-last order-lg-0 p-0  ${
                        navbarMobile ? "navbar-mobile" : ""
                    }`}>
                    <ul>
                        <li className={`nav-item`} onClick={navButton}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                                }
                                aria-current="page"
                                to="/"
                                end>
                                Beranda
                            </NavLink>
                        </li>
                        <li
                            className={`nav-item dropdown`}
                            onClick={dropdownButton}>
                            <NavLink
                                className="nav-link dropdown-toggle align-items-center"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                end>
                                <span className={`${styles.dropdown}`}>
                                    Profil
                                </span>
                            </NavLink>
                            <ul
                                className={`dropdown-menu ${
                                    navbarDropdown
                                        ? "dropdown-active"
                                        : undefined
                                }`}>
                                <li className={`nav-item`} onClick={navButton}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? styles.active : undefined
                                        }
                                        aria-current="page"
                                        to="/guru"
                                        end>
                                        Guru
                                    </NavLink>
                                </li>
                                <li className={`nav-item`} onClick={navButton}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? styles.active : undefined
                                        }
                                        aria-current="page"
                                        to="/visi-misi"
                                        end>
                                        Visi Misi
                                    </NavLink>
                                </li>
                                <li className={`nav-item`} onClick={navButton}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? styles.active : undefined
                                        }
                                        aria-current="page"
                                        to="/prestasi"
                                        end>
                                        Prestasi
                                    </NavLink>
                                </li>
                                <li className={`nav-item`} onClick={navButton}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? styles.active : undefined
                                        }
                                        aria-current="page"
                                        to="/ekstrakurikuler"
                                        end>
                                        Ekstrakurikuler
                                    </NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`nav-item dropdown`}
                            onClick={dropdownGaleriButton}>
                            <NavLink
                                className="nav-link dropdown-toggle align-items-center"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                end>
                                <span className={`${styles.dropdown}`}>
                                    Galeri
                                </span>
                            </NavLink>
                            <ul
                                className={`dropdown-menu ${
                                    navbarDropdownGaleri
                                        ? "dropdown-active"
                                        : undefined
                                }`}>
                                <li className={`nav-item`} onClick={navButton}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? styles.active : undefined
                                        }
                                        aria-current="page"
                                        to="/foto"
                                        end>
                                        Foto
                                    </NavLink>
                                </li>
                                <li className={`nav-item`} onClick={navButton}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? styles.active : undefined
                                        }
                                        aria-current="page"
                                        to="/video"
                                        end>
                                        Video
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={`nav-item `} onClick={navButton}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                                }
                                aria-current="page"
                                to="/berita-artikel"
                                end>
                                Berita & Artikel
                            </NavLink>
                        </li>
                        <li className={`nav-item `} onClick={navButton}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                                }
                                aria-current="page"
                                to="/agenda"
                                end>
                                Agenda
                            </NavLink>
                        </li>

                        <li className={`nav-item `} onClick={navButton}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                                }
                                aria-current="page"
                                to="/kontak"
                                end>
                                Kontak
                            </NavLink>
                        </li>
                        {/* <li className={`nav-item`}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                                }
                                aria-current="page"
                                to="/login-admin"
                                end>
                                <span className={styles.btnlogin}>Login</span>
                            </NavLink>
                        </li> */}
                    </ul>

                    <i
                        className={`bi bi-list mobile-nav-toggle ${
                            navbarMobile ? "bi-x" : ""
                        }`}
                        onClick={toggleNavbar}></i>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

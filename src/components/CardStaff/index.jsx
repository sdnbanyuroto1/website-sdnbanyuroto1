import PropTypes from "prop-types";

const CardStaff = ({ foto, nama, jabatan, deskripsi }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch ">
            <div className="member card-guru rounded-5 shadow">
                <img src={foto} className="img-fluid rounded-5" alt="" />
                <div className="member-content">
                    <h4>{nama}</h4>
                    <span>{jabatan}</span>
                    <p>{deskripsi}</p>
                    <div className="social">
                        <a href="">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardStaff.propTypes = {
    foto: PropTypes.any,
    nama: PropTypes.string,
    jabatan: PropTypes.string,
    deskripsi: PropTypes.string,
};
export default CardStaff;

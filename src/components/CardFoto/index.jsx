import PropTypes from "prop-types";
import { useState } from "react";
import { HOST } from "../../utils/API/api";

const CardFoto = ({ foto, title, deskripsi }) => {
    const [isClick, setIsClick] = useState(false);
    const cardClick = () => {
        setIsClick(!isClick);
    };
    return (
        <div className="col-lg-4 col-md-6 mt-4 mt-md-0 mb-4">
            <div className="card-foto" onClick={cardClick}>
                <img
                    className="img-sekolah"
                    src={`${HOST.url}/${foto}`}
                    alt="Foto Sekolah"
                />
                <div className={`intro ${isClick ? "intro-click" : ""}`}>
                    <h1 className="text-title-foto">{title}</h1>
                    <p className={`card-text-foto ${isClick ? "p-click" : ""}`}>
                        {deskripsi}
                    </p>
                </div>
            </div>
        </div>
    );
};

CardFoto.propTypes = {
    foto: PropTypes.any,
    title: PropTypes.string,
    deskripsi: PropTypes.string,
};

export default CardFoto;

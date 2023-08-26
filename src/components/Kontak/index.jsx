import { MdEmail as Email } from "react-icons/md";

const Kontak = () => {
    return (
        <main id="main">
            <section id="contact" className="contact">
                <div data-aos="fade-up">
                    <iframe
                        style={{
                            border: 0,
                            width: "100%",
                            height: "350px",
                        }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.932541025035!2d110.39165297500179!3d-7.472701992539024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a63311281badb%3A0x384db3ec7925203d!2sSD%20Negeri%20Banyuroto%201!5e0!3m2!1sid!2sid!4v1692348100205!5m2!1sid!2sid"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="container" data-aos="fade-up">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="icon-kontak bi bi-geo-alt"></i>
                                    <h4>Lokasi:</h4>
                                    <p>
                                        Dusun Garon <br />
                                        Desa Banyuroto, Kecamatan Sawangan,
                                        <br />
                                        Kabupaten Magelang, Jawa Tengah 56481
                                    </p>
                                </div>

                                <div className="email">
                                    <a href="mailto:banyurotosiji@gmail.com">
                                        <i className="icon-kontak bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>banyurotosiji@gmail.com</p>
                                    </a>
                                </div>

                                <div className="phone">
                                    <a
                                        href="https://wa.me/+6281328772265"
                                        target="_blank"
                                        rel="noreferrer">
                                        <i className="icon-kontak bi bi-phone"></i>
                                        <h4>Nomor HP:</h4>
                                        <p>+62 81328772265</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows="5"
                                        placeholder="Message"
                                        required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="me-4 text-bg-primary ps-4 pe-4 pt-2 pb-2 rounded-5"
                                        href="mailto:banyurotosiji@gmail.com">
                                        <Email />
                                        Kirim Pesan
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Kontak;

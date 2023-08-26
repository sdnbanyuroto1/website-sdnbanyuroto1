import { useState, useEffect } from "react";
import axios from "axios";
import { API_HOST } from "../../utils/API/api";

const Video = () => {
    const [video, setvideo] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_HOST.url}/video`)
            .then((response) => {
                setvideo(response.data.video);
            })
            .catch((error) => {
                console.error("Error fetching video:", error);
            });
    }, []);
    return (
        <div className="container">
            {video.map((item) => {
                return (
                    <section
                        key={item._id}
                        className="container d-flex justify-content-center"
                        data-aos="fade-up">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.link,
                            }}></div>
                    </section>
                );
            })}
        </div>
    );
};

export default Video;

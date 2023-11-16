import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailStyle.css";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`, {
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "X-RapidAPI-Key": "ca57545f8fmsh21e867c20ea491dp172cb1jsn6c6de286e525",
          },
        });
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...., Jika Loading lama, ganti key API nya</p>;
  }
  if (!data) {
    return <p>Data tidak tersedia</p>;
  }

  return (
    <div className="conDetail">
      <div className="fiks">
        <img className="gambarDetail" src={data.image.url} alt={data.title} />
        <div className="fiksDetail">
          <h2>{data.title}</h2>
          <div className="keterangan">
            <p>Type: {data.titleType}</p>
            <p>Year: {data.year}</p>
            <p>Duration: {data.runningTimeInMinutes} min</p>
            <p>Episodes: {data.numberOfEpisodes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

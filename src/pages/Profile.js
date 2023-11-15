import { Fragment } from "react";
import CardProfile from "../components/cardForProfile";

// import Card from "../components/card";

import "./Profile.css";
export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const data = [
    {
      name: "Nisyrina Rahmatina",
      id: 1,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
    {
      name: "Leonardus",
      id: 2,
      rate: 4,
      NIM: "2111111",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
    {
      name: "Roy",
      id: 3,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
    {
      name: "AB",
      id: 4,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
  ];
  return (
    <>
      <div className="judul">
        <p id="movies">Anggota Kelompok 5</p>
      </div>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile name={item.name} img1={item.img1} NIM={item.NIM} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("item id = " + item.id)} />
          {data.length === index + 1 && (
            <div
              style={{
                marginBottom: 80,
              }}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("One Piece");

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://imdb8.p.rapidapi.com/auto-complete", {
          params: { q: query },
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "X-RapidAPI-Key": "4c713cbd32msh1801ec698f19a2dp1c5142jsnb36802bb9582",
            //jika tidak bisa, kemungkinan sudah limit ley nya, gunakan key dibawah ini
            //'X-RapidAPI-Key': 'ca57545f8fmsh21e867c20ea491dp172cb1jsn6c6de286e525',
          },
        });
        if (response.status === 200) {
          setData(response.data);
          setisLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    if (!isLoaded) {
      fetchData(query);
    }
  }, [isLoaded, query]);
  const onSearch = (e) => {
    if (e.key === "Enter") {
      setisLoaded(false);
      setQuery(e.target.value);
    }
  };
  const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
  };
  return (
    <main>
      <input type="text" placeholder="Search film by name" onKeyDown={(e) => onSearch(e)} />
      <h3 className="title">Search : {query}</h3>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {data.d.map((item, index) => {
            return <Card data={item} key={index} onClick={() => handleClick(item)} />;
          })}
        </div>
      )}
      <Modal data={modalItem} isShow={modalShow} onCancel={() => setModalShow(false)} />
    </main>
  );
}

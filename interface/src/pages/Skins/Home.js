import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import NowLoading from "../../components/NowLoading";

const Home = () => {
  const [skins, setSkins] = useState([]);
  const URL = "http://localhost:3000/api";

  const getSkins = async () => {
    try {
      let resSkins = await axios({
        url: `${URL}/skins`,
        method: "GET",
      });
      console.log(resSkins.data);
      setSkins(resSkins.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    console.log("Testo");
    getSkins();
  }, []);

  return (
    <>
      <hr></hr>
      <div className="row">
        {skins.length !== 0 ? (
          skins.map((skin) => {
            const { id, name, image, priceBp, priceDm, Hero, Type } = skin;
            return (
              // JSX Fragment
              <>
                <div className="col-4">
                  <div className="card">
                    <img
                      class="card-img-top"
                      src={image}
                      alt="Card image cap"
                      height={290}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">Diamond : {priceDm}</p>
                      <a href="#" className="btn btn-primary">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <NowLoading />
        )}
      </div>
    </>
  );
};

export default Home;

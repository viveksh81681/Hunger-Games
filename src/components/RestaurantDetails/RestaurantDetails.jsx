import { useEffect, useState } from "react";
import "./RestaurantDetails.css";

export const RestaurantDetails = () => {
  const [resdata, setResdata] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:3001/Restaurant`)
      .then((Response) => Response.json())
      .then((data) => setResdata(data));
  };

  return (
    <div>
      {resdata.map((elem) => {
        return (
          <div>
            <div className="flax">
              <div className="flex1">
                <div>
                  <img src={elem.img_url} />
                </div>
                <div>
                  <h2>{elem.name}</h2>
                  <p>{elem.categories}</p>
                  <p>cost for two: ${elem.cost_for_two}</p>
                  <p>Min:${elem.min}-Upto 30 min</p>
                  <p>Accept: {elem.Payment_method}</p>
                </div>
              </div>
              <div className="flex2">
                <p>rating: {elem.rating}</p>
                <p>votes: {elem.votes}</p>
                <p>riviews: {elem.reviews}</p>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    const Base_url = `https://api.spoonacular.com/recipes/`;

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const url = await fetch(
        `${Base_url}random?apiKey=d7288ed38b624e31be834adf16dad6a4&number=10`
      );
      const data = await url.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "20px",
          }}
        >
          {popular.map((recipe, indexCard) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card" key={"Card" + indexCard}>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="gradient"></div>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;

import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    const Base_url = `https://api.spoonacular.com/recipes/`;

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const url = await fetch(
        `${Base_url}random?apiKey=d7288ed38b624e31be834adf16dad6a4&number=10&tags=vegetarian`
      );
      const data = await url.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      getVeggie(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
      <div className="wrapper">
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "20px",
          }}
        >
          {veggie.map((recipe, indexCard) => {
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

export default Veggie;

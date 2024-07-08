import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <div>
          <h1>Elevate your Style, Lace Up and Level Up.</h1>
          <p>
            Step into style and comfort with our collection of shoes curated for
            you. we've got your feet covered with our diverse selection of
            footwear, designed to keep you looking great all day long.
          </p>
          <button onClick={() => navigate("products")}>SHOP NOW</button>
        </div>
        <div className="hero-pic">
          <img src="images/hero-pic.png" alt="sneaks" />
        </div>
      </div>
    </>
  );
}

export default Home;

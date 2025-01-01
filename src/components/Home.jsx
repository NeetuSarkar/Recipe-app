import React from "react";
import image1 from "../assets/indian.jpg";
import image2 from "../assets/drinks.jpg";
import image3 from "../assets//medeterian.jpg";
import image4 from "../assets/pizza.jpg";
import image5 from "../assets/japaness.jpg";
import image6 from "../assets/pasta.jpg";
import image7 from "../assets/salad.jpg";
import image8 from "../assets/thai.jpg";
import image9 from "../assets/burger.jpg";
import detailImage from "../assets/hero2.jpeg";
import "../styles/Home.css";
import ChiefCard from "./ChiefCard";

const Home = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const topChefs = [
    {
      name: "Gordon Ramsay",
      instagram: "@gordongram",
      instagramUrl: "https://www.instagram.com/gordongram/",
      facebook: "https://www.facebook.com/GordonRamsay",
      twitter: "@GordonRamsay",
      twitterUrl: "https://twitter.com/GordonRamsay",
      cuisine: "British",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.xSytpxu8ZLcNP0VmBboDiwHaHa&pid=Api",
    },
    {
      name: "Massimo Bottura",
      instagram: "@massimobottura",
      instagramUrl: "https://www.instagram.com/massimobottura/",
      facebook: "https://www.facebook.com/massimo.bottura",
      twitter: "@MassimoBottura",
      twitterUrl: "https://twitter.com/MassimoBottura",
      cuisine: "Italian",
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.C1jo2DcTWjaIkJAw6GP6OgHaHa&pid=Api",
    },
    {
      name: "Dominique Crenn",
      instagram: "@dominiquecrenn",
      instagramUrl: "https://www.instagram.com/dominiquecrenn/",
      facebook: "https://www.facebook.com/dominiquecrenn",
      twitter: "@DominiqueCrenn",
      twitterUrl: "https://twitter.com/DominiqueCrenn",
      cuisine: "French",
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.Hs9rSEcJu9gXswQSAB7VIAHaLH&pid=Api",
    },
    {
      name: "Yotam Ottolenghi",
      instagram: "@ottolenghi",
      instagramUrl: "https://www.instagram.com/ottolenghi/",
      facebook: "https://www.facebook.com/yotam.ottolenghi",
      twitter: "@Ottolenghi",
      twitterUrl: "https://twitter.com/Ottolenghi",
      cuisine: "Middle Eastern",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.pGkFL-YlaJZMczvY1yLWKwHaK7&pid=Api",
    },
    {
      name: "Vikas Khanna",
      instagram: "@vikaskhannagroup",
      instagramUrl: "https://www.instagram.com/vikaskhannagroup/",
      facebook: "https://www.facebook.com/VikasKhannaGroup",
      twitter: "@TheVikasKhanna",
      twitterUrl: "https://twitter.com/TheVikasKhanna",
      cuisine: "Indian",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7xzXSCsm8CS8KoqsjS9_FeS3Qo86ZfrMWA&s",
    },
    {
      name: "René Redzepi",
      instagram: "@reneredzepinoma",
      instagramUrl: "https://www.instagram.com/reneredzepinoma/",
      facebook: "https://www.facebook.com/reneredzepi",
      twitter: "@ReneRedzepi",
      twitterUrl: "https://twitter.com/ReneRedzepi",
      cuisine: "Nordic",
      imageUrl:
        "https://thebestchefawards.com/wp-content/uploads/2022/03/x2020-winner-Rene-Redzepi-400x400.jpg.pagespeed.ic.0aHh_sMSOz.jpg",
    },
  ];

  return (
    <div className="home-container">
      {/* about Section */}
      <div className="about">
        <div className="about-left">
          <h1>What Are We About</h1>
          <p>
            FoodParadise is a place where you can please your soul and tummy
            with delicous food recipes of all cusine And our service is
            absolutely free, So start exploring now
          </p>
          <button>EXPLORE NOW</button>
        </div>
        <div className="about-right">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`image-${index}`} />
          ))}
        </div>
      </div>

      {/* Details section */}
      <div className="details">
        <div className="details-img">
          <img src={detailImage} />
        </div>
        <div className="detail-list">
          <h1>Improve Your Culinary Skills</h1>
          <ul>
            <li>Learn new recepies</li>
            <li>Experiment with food</li>
            <li>Write your own recipes</li>
            <li>Know nutrition facts</li>
            <li>Get cooking tips</li>
            <li>Get ranked</li>
          </ul>
          <button>SIGNUP NOW</button>
        </div>
      </div>

      {/* Quote section */}
      <div className="quote">
        <p className="quote-text">
          <span className="quote-start">❝</span>
          Food is everything we are. It’s an extension of nationalist feeling,
          ethnic feeling, your personal history, your experience. It’s
          inseparable from who you are.
        </p>
        <p className="author">~ Anthony Bourdain</p>
      </div>

      {/* top-chiefs section */}
      <div className="top-chefs">
        <h1>Our Top Chiefs</h1>
        <div className="chefs">
          {topChefs.map((chef, index) => (
            <ChiefCard key={index} chef={chef} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

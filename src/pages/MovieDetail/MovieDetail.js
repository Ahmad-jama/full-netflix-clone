import React from "react";
import { DetailSection, Nav } from "../../components/MovieDetailComponents";
import { Footer } from "../../components/HomeComponents";
const MovieDetail = () => {
  return (
    <section
      style={{
        color: "white",
        backgroundImage:
          ' url("http://movie4u.watch/frontend/img/section/details.jpg")',
      }}
    >
      <Nav />
      <DetailSection />
      <Footer />
    </section>
  );
};

export default MovieDetail;

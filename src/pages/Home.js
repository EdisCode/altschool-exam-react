import React from "react";
import { Nav, Footer } from "../components";
import picture from "../assets/picture.jpg";
import { HiOutlineHand } from "react-icons/hi";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Intro for the Counter app with my details and GitHub link."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Nav />
      <section>
        <div className="avatar-container">
          <img
            width={100}
            height={120}
            src={picture}
            className="avatar"
            alt="avatar"
            title="avatar"
            loading="eager"
          />
          <h1 className="intro">Hi there! My name is Edikan Ekanem</h1>
          <HiOutlineHand size={20} color="steelblue" />
        </div>
        <div className="info">
          <h2>Nice of you to join me here.</h2>
          <p>
            Kindly check out my amazing Counter app I created using ReactJS.
          </p>
          <p>You can know more about me by clicking my name below. </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

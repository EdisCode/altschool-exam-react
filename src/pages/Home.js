import React from "react";
import { Nav, Footer } from "../components";
import picture from "../assets/picture.jpg";
import { HiOutlineHand } from "react-icons/hi";

function Home() {
  return (
    <>
      <Nav />
      <section>
        <div className="avatar-container">
          <img src={picture} className="avatar" alt="logo" />
          <h1 className="intro">Hi there! My name is Edikan Ekanem</h1>
          <HiOutlineHand size={20} color="steelblue" />
        </div>
        <div class="info">
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

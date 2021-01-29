import React from "react";
import Header from "./Header";
import Animation from "./Anime/Animation";
import Footer from "./Footer"
import About from "./About"



function Home() {
  return (
    <div>
       <Header />
       <Animation />
       <About /> 
       
       <Footer />
    </div>
  );
}
export default Home;

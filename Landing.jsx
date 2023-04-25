import React from "react";
import ContainerBelow from "./ContainerBelow";
import Footer from "./Footer";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";
import Navbars from "./Navbars";

function Landing() {
  return (
    <div>
      <Navbars />
      <Grid1 />
      <ContainerBelow />
      <Grid2 />
      <Footer />
    </div>
  );
}

export default Landing;

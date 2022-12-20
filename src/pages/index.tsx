import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Logo1 from "./hero-bg.svg";
// import Logo2 from "./hero.svg";
// import Logo3 from "./logo-small.svg";

const pageStyles = {
  color: "#232129",
  position: "absolute" as "absolute",
  top: "-20px",
  left: "-10px",
};

const IndexPage: React.FC<PageProps> = () => {
  console.log({ Logo1 });
  return (
    <div>
      <img src={Logo1} alt="teext" style={pageStyles} />
      {/* <Logo1 /> */}
      {/* <img src="./hero.svg" />
      <img src="./logo-small.svg" /> */}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

{
  /* <img src="./hero-bg.svg" />
<img src="./hero.svg" />
<img src="./logo-small.svg" /> */
}

/* <Logo1 />
<Logo2 />
<Logo3 /> */

//9.76MB before fix

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import * as gif from "../../assets/pics/loading.json";
import LoaderCSS from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={LoaderCSS.gif}>
      <Player
        autoplay
        loop
        src={gif}></Player>
    </div>
  );
}

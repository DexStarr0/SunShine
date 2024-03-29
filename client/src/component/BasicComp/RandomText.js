import React from "react";

export default function RandomText() {
  let text = ["hmm", "okai", "आगे", "ok", "hmmmmm", "acha", "okay"];
  return <>{text[Math.floor(Math.random() * text.length)]}</>;
}

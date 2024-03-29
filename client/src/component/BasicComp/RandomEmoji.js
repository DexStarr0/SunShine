import React from "react";

export default function RandomEmoji() {
  let emojis = [
    "😄",
    "😃",
    "😀",
    "😊",
    "😉",
    "😍",
    "😜",
    "😝",
    "😛",
    "😳",
    "😁",
    "😋",
    "😎",
    "😇",
    "🤭",
    "🤗",
  ];
  return (
    <div className="emoji">
      {emojis[Math.floor(Math.random() * emojis.length)]}
    </div>
  );
}

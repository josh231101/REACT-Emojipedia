import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function chargeEmoji(emoji) {
  return (
    <Emoji
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(chargeEmoji)}</dl>
    </div>
  );
}

export default App;
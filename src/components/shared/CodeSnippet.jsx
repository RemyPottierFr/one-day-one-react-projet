import React, { useState } from "react";

function CodeSnippet(props) {
  const [isCopy, setIsCopy] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      function () {
        setIsCopy(true);
        setTimeout(() => {
          setIsCopy(false);
        }, 1500);
      },
      () => setIsCopy(false)
    );
  };
  return (
    <div className="relative h-auto">
      <pre
        onClick={(e) => {
          copyToClipboard(e.target.textContent);
        }}
        className="code-block text-sm my-2"
        title={isCopy ? "copied !" : "copy"}
      >
        {props.children}
      </pre>
      {isCopy && <span>copied !</span>}
    </div>
  );
}

export default CodeSnippet;

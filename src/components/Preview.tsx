import { useEffect, useRef, useState } from "react";

interface PreviewProps {
  code: string;
}

export function Preview({ code }: PreviewProps) {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
          <style>
            body { margin: 0; padding: 0; min-height: 100vh; background: transparent; display: flex; align-items: start; justify-content: center; overflow-y: auto; overflow-x: hidden; }
            #preview-container { width: 100%; min-height: 100%; display: flex; align-items: start; justify-content: center; }
            /* Ensure animations and transitions work */
            * { transition: all 0.2s ease-out; }
          </style>
        </head>
        <body>
          <div id="preview-container">
            ${code}
          </div>
        </body>
      </html>
    `;
    setSrcDoc(content);
  }, [code]);

  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 relative">
      <iframe
        srcDoc={srcDoc}
        className="w-full h-full border-none"
        title="Card Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}

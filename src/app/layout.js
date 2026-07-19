"use client";

import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    // 1. First Script (Shareable)
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/shareable.js";
    script1.async = true;
    document.body.appendChild(script1);

    // 2. Second Script (Bundle & Init)
    const script2 = document.createElement("script");
    script2.src = "https://styler-e59b32.botpress.cloud/webchat/v2.2/bundle.js";
    script2.async = true;
    
    script2.onload = () => {
      if (window.botpress) {
        window.botpress.init({
          "botId": "05aff31d-5226-4a81-846a-59c4710120a9",
          "configuration": {
            "botName": "SARDAR AI",
            "closeOnEscape": true,
            "showBotInfoPage": false,
            "enableConversationDeletion": true
          }
        });
      }
    };

    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

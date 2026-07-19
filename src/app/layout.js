"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Jab window load ho jaye ya component mount ho, tab script ko init karein
    const initBotpress = () => {
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

    // Agar botpress pehle se load ho chuka hai
    if (window.botpress) {
      initBotpress();
    } else {
      // Script load hone ka wait karein
      window.addEventListener("botpressWidgetReady", initBotpress);
    }

    return () => {
      window.removeEventListener("botpressWidgetReady", initBotpress);
    };
  }, []);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}

        {/* Botpress Integration Webchat Scripts */}
        <Script 
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.js" 
          strategy="lazyOnload"
        />
        <Script 
          src="https://styler-e59b32.botpress.cloud/webchat/v2.2/bundle.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

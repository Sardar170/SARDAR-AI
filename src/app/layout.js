"use client";

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Botpress Integration Webchat Scripts */}
        <Script 
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.js" 
          strategy="lazyOnload"
        />
        <Script 
          src="https://styler-e59b32.botpress.cloud/webchat/v2.2/bundle.js" 
          strategy="lazyOnload"
          onLoad={() => {
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
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SARDAR AI",
  description: "Professional AI Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Aapka baqi saara page content yahan render hoga */}
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

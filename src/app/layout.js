export const metadata = {
  title: "SARDAR AI",
  description: "Professional AI Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Native Injection in Head */}
        <script src="https://cdn.botpress.cloud/webchat/v2.2/shareable.js" async></script>
        <script src="https://styler-e59b32.botpress.cloud/webchat/v2.2/bundle.js" async></script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a' }}>
        {children}

        {/* Global Auto Initialization Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function startBotpress() {
              if (window.botpress && typeof window.botpress.init === 'function') {
                window.botpress.init({
                  "botId": "05aff31d-5226-4a81-846a-59c4710120a9",
                  "configuration": {
                    "botName": "SARDAR AI",
                    "closeOnEscape": true,
                    "showBotInfoPage": false,
                    "enableConversationDeletion": true
                  }
                });
              } else {
                setTimeout(startBotpress, 200);
              }
            }
            // Execute as soon as DOM is ready or fully loaded
            if (document.readyState === 'complete') {
              startBotpress();
            } else {
              window.addEventListener('load', startBotpress);
            }
          `
        }} />
      </body>
    </html>
  );
}

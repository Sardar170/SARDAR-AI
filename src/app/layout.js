export const metadata = {
  title: "SARDAR AI",
  description: "Professional AI Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Official Botpress Webchat Web-Component Client */}
        <script src="https://cdn.botpress.cloud/webchat/v2.2/shareable.js" defer></script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a' }}>
        {children}

        {/* Client Configuration Setup */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
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
            });
          `
        }} />
      </body>
    </html>
  );
}

"use client";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#0a0a0a'
    }}>
      {/* Native Browser Injection: Next.js standard behavior ko bypass karne ke liye */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <script src="https://cdn.botpress.cloud/webchat/v2.2/shareable.js" async></script>
          <script src="https://styler-e59b32.botpress.cloud/webchat/v2.2/bundle.js" async></script>
          <script>
            function initBot() {
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
                setTimeout(initBot, 100);
              }
            }
            window.addEventListener('load', initBot);
            // Backup trigger agar load event pehle hi guzar chuka ho
            setTimeout(initBot, 500);
          </script>
        `
      }} />

      <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: '#3b82f6' }}>
        SARDAR AI
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#a3a3a3', maxWidth: '500px' }}>
        Your Advanced Automation & Voice AI Agent Dashboard is ready.
      </p>
      <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#6b7280' }}>
        Click the chat icon on the bottom right to start the conversation.
      </div>
    </div>
  );
}

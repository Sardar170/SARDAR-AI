"use client";

import { useEffect } from "react";

export default function Home() {
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
      // Cleanup strings when leaving page
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

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
      padding: '20px'
    }}>
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

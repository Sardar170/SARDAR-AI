"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 1. Botpress Stylesheet aur scripts inject karna
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/shareable.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://styler-e59b32.botpress.cloud/webchat/v2.2/bundle.js";
    script2.async = true;

    script2.onload = () => {
      const initBot = setInterval(() => {
        if (window.botpress && typeof window.botpress.init === "function") {
          clearInterval(initBot);
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
      }, 100);
    };

    document.head.appendChild(script2);

    // 2. Force CSS visibility override (Z-Index fix)
    const style = document.createElement("style");
    style.innerHTML = `
      #bp-webchat, .bpw-layout, #bp-webchat-container {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        z-index: 999999 !important;
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
      if (document.head.contains(style)) document.head.removeChild(style);
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
      padding: '20px',
      backgroundColor: '#0a0a0a'
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

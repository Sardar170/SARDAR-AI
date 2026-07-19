"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 1. Botpress Scripts inject karne ka fullproof function
    const loadBotpress = () => {
      // Agar pehle se script maujood na ho to hi add karein
      if (!document.getElementById("botpress-shareable")) {
        const script1 = document.createElement("script");
        script1.id = "botpress-shareable";
        script1.src = "https://cdn.botpress.cloud/webchat/v2.2/shareable.js";
        script1.async = true;
        document.head.appendChild(script1);
      }

      if (!document.getElementById("botpress-bundle")) {
        const script2 = document.createElement("script");
        script2.id = "botpress-bundle";
        script2.src = "https://styler-e59b32.botpress.cloud/webchat/v2.2/bundle.js";
        script2.async = true;

        script2.onload = () => {
          // Jab bundle load ho jaye, checking loop chalayein jab tak window.botpress ready na ho
          const checkBotpress = setInterval(() => {
            if (window.botpress && typeof window.botpress.init === "function") {
              clearInterval(checkBotpress);
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
          }, 200); // Har 200ms baad check karega jab tak load na ho jaye
        };

        document.head.appendChild(script2);
      }
    };

    // Agar document ready ho ya load ho chuka ho
    if (document.readyState === "complete") {
      loadBotpress();
    } else {
      window.addEventListener("load", loadBotpress);
      return () => window.removeEventListener("load", loadBotpress);
    }
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

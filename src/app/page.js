export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#0a0a0a',
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

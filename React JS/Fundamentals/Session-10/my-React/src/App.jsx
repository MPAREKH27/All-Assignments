import React from "react";
import { UserProvider } from "./contexts/Usrecontext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import Navbar from "./component/Navbar";
import UserPanel from "./component/UserPanel";
import DeepTree from "./component/DeepChild";
import NotificationDemo from "./component/NotificationDemo";

function ThemedApp() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const section = {
    padding: "16px 20px",
    borderRadius: "10px",
    marginBottom: "16px",
    background: dark ? "#16213e" : "#ffffff",
    border: `1px solid ${dark ? "#2a3050" : "#e5e7eb"}`,
  };

  const sectionLabel = {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: ".07em",
    textTransform: "uppercase",
    color: dark ? "#6b7280" : "#9ca3af",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        background: dark ? "#1a1a2e" : "#f5f6fa",
        color: dark ? "#e8eaf0" : "#1a1a2e",
        transition: "background 0.2s",
      }}
    >
      <Navbar />
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "24px 20px" }}>
        <div style={section}>
          <div style={sectionLabel}>Task 1 & 2 — UserContext + Navbar</div>
          <UserPanel />
        </div>
        <div style={section}>
          <div style={sectionLabel}>Task 3 — ThemeContext (toggle top-right)</div>
          <p style={{ fontSize: "13px", color: dark ? "#9ca3af" : "#6b7280" }}>
            Current theme: <strong>{theme}</strong>. The entire page background updates via{" "}
            <code>ThemeContext</code>. Navbar calls <code>toggleTheme()</code> from{" "}
            <code>useTheme()</code> — no prop needed.
          </p>
        </div>
        <div style={section}>
          <div style={sectionLabel}>Task 4 — Deep child (no prop drilling)</div>
          <p style={{ fontSize: "12px", color: dark ? "#9ca3af" : "#6b7280", marginBottom: "10px" }}>
            Tree: App → ThemedLayout → ThemedPage → ThemedCard → <strong>DeepChild</strong>
          </p>
          <DeepTree />
        </div>
        <div style={section}>
          <div style={sectionLabel}>Task 5 — NotificationContext (unread counter)</div>
          <NotificationDemo />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationProvider>
          <ThemedApp />
        </NotificationProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
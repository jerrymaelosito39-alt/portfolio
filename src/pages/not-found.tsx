import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f9fafb"
    }}>
      <div style={{ textAlign: "center", padding: 20 }}>
        <AlertCircle size={40} color="red" />
        <h1 style={{ fontSize: 24, marginTop: 10 }}>
          404 Page Not Found
        </h1>
        <p style={{ color: "#666" }}>
          This page does not exist.
        </p>
      </div>
    </div>
  );
}

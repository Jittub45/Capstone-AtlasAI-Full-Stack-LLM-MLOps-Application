// SentimentApp.jsx
import React, { useState } from "react";

export default function SentimentApp() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setResult(data.prediction); // expecting { prediction: 1 or 0 }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Sentiment Analysis</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text" style={styles.label}>
            Write text:
          </label>
          <textarea
            id="text"
            name="text"
            rows="5"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>
            Predict
          </button>
        </form>

        {result !== null && (
          <div
            style={{
              ...styles.result,
              ...(result === 1 ? styles.positive : styles.negative),
            }}
          >
            {result === 1 ? "😊 Positive Sentiment" : "😞 Negative Sentiment"}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    padding: "20px",
    height: "100vh",
  },
  container: {
    maxWidth: "500px",
    margin: "auto",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#333",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "8px",
    color: "#555",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "12px 20px",
    marginTop: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
  result: {
    marginTop: "20px",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "5px",
  },
  positive: {
    color: "#155724",
    backgroundColor: "#d4edda",
    border: "1px solid #c3e6cb",
  },
  negative: {
    color: "#721c24",
    backgroundColor: "#f8d7da",
    border: "1px solid #f5c6cb",
  },
};

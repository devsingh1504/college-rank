import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.post("/", async (req, res) => {
  const { rank } = req.body;
  console.log("Received rank:", rank);

  try {
    // Forward the request to your ML API
    const response = await axios.post(
      "http://college-selector-new-2.onrender.com",
      { rank }
    );

    // Send the ML API response back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from ML API:", error.message);
    res.status(500).json({ error: "Failed to fetch data from ML API" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

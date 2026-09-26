const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        status: "online",
        service: "MarketMind AI Backend"
    });
});

// AI analysis route
app.post("/api/analyze", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        // AI API will be connected here later.

        res.json({
            success: true,
            response: `MarketMind received your request: ${message}`
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Server error"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`MarketMind backend running on port ${PORT}`);
});

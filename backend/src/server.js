import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT  = process.env.PORT || 5001;

// Middleware;
app.use(cors());
app.use(express.json()); // This parses the JSON bodies: {req.body}
app.use(rateLimiter);

// app.use((req, res, next) => { *A SIMPLE CUSTOM MIDDLEWARE!*
//     console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
    });
});
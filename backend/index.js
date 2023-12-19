// Dependencias
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Archivos
import router from "./router/todo.js";

const app = express();

app.use(router)
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server listened in port: 3000")
})

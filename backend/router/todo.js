import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    res.json({talks: "all taks"})
});

export default router;
import express from "express";
import { nanoid } from "nanoid";
import Url from "../models/apiModels.js";
import { validarURL } from "../middlewares/validarURL.js";

const router = express.Router();

router.post("/", validarURL, async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) return res.status(400).json({ error: "URL is required" });

    try {
      new URL(url);
    } catch (_) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    const shortId = nanoid(5);
    const newUrl = await Url.create({ originalUrl: url, shortId });

    return res.status(201).json({
      originalUrl: newUrl.originalUrl,
      shortUrl: `${process.env.BASE_URL}/${newUrl.shortId}`,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "Try again, ID conflict" });
    }
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

router.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;

    const urlDoc = await Url.findOneAndUpdate(
      { shortId },
      { $inc: { clicks: 1 } },
    );

    if (!urlDoc) {
      return res.status(404).json({ error: "URL not found" });
    }

    return res.redirect(urlDoc.originalUrl);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;

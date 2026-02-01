import { URL } from "url";

export const validarURL = (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "La URL es obligatoria" });
    }

    const urlObject = new URL(url);

    if (urlObject.protocol !== "http:" && urlObject.protocol !== "https:") {
      return res.status(400).json({
        error: "Solo se permiten enlaces http o https",
      });
    }

    next();
  } catch (err) {
    return res.status(400).json({ error: "URL inválida, revisa el formato" });
  }
};

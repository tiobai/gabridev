import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", {title:"NOVEL CHANGGE"}));
router.get("/about", (req, res) => res.render("about", {img: "imagen"}));
router.get("/contact", (req, res) => res.render("contact"));
router.get("/1", (req, res) => res.render("index"));
router.get("/2", (req, res) => res.render("index"));
router.get("/3", (req, res) => res.render("index"));
router.get("/4", (req, res) => res.render("index"));
router.get("/5", (req, res) => res.render("index"));
router.get("/6", (req, res) => res.render("index"));


export default router;
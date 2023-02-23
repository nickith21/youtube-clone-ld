import express from "express"
import { comment } from "../controllers/comment.js"

const router = express.Router()

router.get("/json",comment)

export default router
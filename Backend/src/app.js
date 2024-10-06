import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";

export const app = express();

app.use(cors());
app.use(urlencoded({extended:true}));
app.use(cookieParser());

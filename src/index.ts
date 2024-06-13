import express, { Application } from "express";
import { getFunction, postFunction } from "./controller";
import { asyncHandler, errorHandler } from "./middleware/errorHandler";

const app: Application = express();

app.use( express.json() )

app.get("/", asyncHandler( getFunction ));

app.post("/", asyncHandler( postFunction ) );

app.use( "*", errorHandler );

app.listen(3000, () => {
    console.log("Server running in port 3000");
})
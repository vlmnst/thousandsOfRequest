import express, { Application } from "express";
import { postFunction } from "./controller";
import { asyncHandler, errorHandler } from "./middleware/errorHandler";
import { executeRequests } from "./scriptRequest";

const app: Application = express();

app.use( express.json() )

app.post("/api", asyncHandler( postFunction ) );

app.use( "*", errorHandler );

app.listen(3000, () => {
    console.log("Server running in port 3000");
})



executeRequests()
.then( () => console.log( "Data added to the file."))
.catch( (error) => console.log( error ));
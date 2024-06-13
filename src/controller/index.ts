import { Request, Response } from "express"
import { myQueue } from "../config/jobQueue";


export const postFunction = async( req: Request, res: Response ): Promise<void> => {
   const data = req.body;
   
   const response = await myQueue.add( data );
   res.status( 200 ).json({ message: "Success", results: response.data })
}
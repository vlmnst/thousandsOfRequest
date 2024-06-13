import { Request, Response } from "express"
import { Mock } from "../mocks/mock"



export const getFunction = async( req: Request, res: Response ): Promise<void> => {
   res.status( 200 ).json({ message: "Success", results: Mock })
}

export const postFunction = async( req: Request, res: Response ): Promise<void> => {
   const { new_fruit } = req.body;
   if (Mock.includes( new_fruit )) throw Error ("The fruit already exist");
   Mock.push( new_fruit );
   res.status( 200 ).json({ message: "Success", results: Mock })
}
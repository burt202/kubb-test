import { z } from "zod";
import { petsSchema } from "./";

export const errorSchema = z.object({"code": z.number(),"message": z.string()});
export const petSchema = z.object({"id": z.number(),"name": z.string(),"tag": z.string().optional()});
export const petsSchema = z.array(z.lazy(() => petSchema));
export const listPetsQueryParamsSchema = z.object({ "limit": z.number().describe(`How many items to return at one time (max 100)`).optional() }).optional();

 /**
       * @description A paged array of pets
       */
export const listPetsQueryResponseSchema = z.lazy(() => petsSchema);

export const createPetsMutationResponseSchema = z.any();

export const showPetByIdPathParamsSchema = z.object({ "petId": z.string().describe(`The id of the pet to retrieve`) });

 /**
       * @description Expected response to a valid request
       */
export const showPetByIdQueryResponseSchema = z.lazy(() => petsSchema);
export type Error = {
    /**
     * @type integer int32
    */
    code: number;
    /**
     * @type string
    */
    message: string;
};

export type Pet = {
    /**
     * @type integer int64
    */
    id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string | undefined
    */
    tag?: string;
};

export type Pets = Pet[];

export type ListPetsQueryParams = {
    /**
     * @description How many items to return at one time (max 100)
     * @type integer | undefined int32
    */
    limit?: number;
} | undefined;

 /**
 * @description A paged array of pets
*/
export type ListPetsQueryResponse = Pets;
export type ListPetsQuery = {
    Response: ListPetsQueryResponse;
    QueryParams: ListPetsQueryParams;
};

export type CreatePetsMutationResponse = any | null;
export type CreatePetsMutation = {
    Response: CreatePetsMutationResponse;
};

export type ShowPetByIdPathParams = {
    /**
     * @description The id of the pet to retrieve
     * @type string
    */
    petId: string;
};

 /**
 * @description Expected response to a valid request
*/
export type ShowPetByIdQueryResponse = Pets;
export type ShowPetByIdQuery = {
    Response: ShowPetByIdQueryResponse;
    PathParams: ShowPetByIdPathParams;
};
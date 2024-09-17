import { BadRequestError } from '../errors/CustomError.js';

export const validateRequiredFields = (fields, data) => {
  for(const field of fields){
    if(!data[field]){
      throw new BadRequestError(`Missing required field: ${field}`);
    }
  }
}
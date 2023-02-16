import joi from "joi";

export const starSchema = joi.object({
  star: joi.number().min(1).max(5).required(),
});
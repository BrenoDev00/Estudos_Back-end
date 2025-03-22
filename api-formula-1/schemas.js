import Joi from "joi";
import { drivers, generateTeamsArray } from "./data.js";

const teams = generateTeamsArray();

const teamSchema = Joi.number().min(1).max(teams.length);

const positionSchema = Joi.number().min(1).max(drivers.length);

const driverSchema = Joi.object({
  name: Joi.string().min(3).max(64).required(),
  team: Joi.string().min(3).max(64).required(),
  points: Joi.number().min(0).max(1000).default(0),
});

const updateDriverSchema = Joi.object({
  name: Joi.string().min(3).max(64),
  team: Joi.string().min(3).max(64),
  points: Joi.number().min(0).max(1000),
}).min(1);

export { teamSchema, positionSchema, driverSchema, updateDriverSchema };

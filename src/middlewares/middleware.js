import {thunk} from "redux-thunk";
import logger from "./logger";
import authCheck from "./authCheck";

const middleware = [thunk, logger];

export default middleware;

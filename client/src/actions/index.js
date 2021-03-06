import axios from "axios";

import { FETCH_USER } from "./type";

export const fetchUser = () => async (dispatch, getState) => {
    const res = await axios.get("/api/user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async (dispatch, getState) => {
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: res.data });
};

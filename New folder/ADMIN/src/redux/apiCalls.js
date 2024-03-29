import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    getUsersFailure,
    getUsersStart,
    getUsersSuccess,
    addUserFailure,
    addUserStart,
    addUserSuccess,
  } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};


export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await userRequest.get("/users");
      dispatch(getUsersSuccess(res.data));
      console.log(res.data);
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };
  
  export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
      const res = await userRequest.delete(`/users/${id}`);
      dispatch(deleteUserSuccess(id));
    } catch (err) {
      dispatch(deleteUserFailure());
    }
  };
  
  export const updateUser = async (id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
      const res = await userRequest.put(`/users/${id}`, user);
      dispatch(updateUserSuccess(res.data));
    } catch (err) {
      dispatch(updateUserFailure());
    }
  };
  
  export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
      const res = await userRequest.post(`/users`, user);
      dispatch(addUserSuccess(res.data));
    } catch (err) {
      dispatch(addUserFailure());
    }
  };
import Restaurants from "../components/Restaurants";
import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all restaurant
const getAllRestaurant = async () => {
  return await api.get(RESTO_API);
};
//get restaurant by id
const getRestaurantById = async () => {
  //แบบเก่า
  return await api.get(RESTO_API + "/" + id);
  // แบบใหม่ return await api.get(`${RESTO_API}/$(id)`);
};
//update restaurant by ID
const editRestaurantById = async (id, restaurant) => {
  return await api.put(`${RESTO_API}/$(id)`, restaurant);
};
//add restaurant
const inserRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

//delete restaurant
const deleteRestaurant = async (id) => {
  return await api.delete(`${RESTO_API}/$(id)`);
};

const RestaurantService = {
  getAllRestaurant,
  getRestaurantById,
  editRestaurantById,
  deleteRestaurant,
  inserRestaurant,
};

export default RestaurantService;

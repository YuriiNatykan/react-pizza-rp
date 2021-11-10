import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

//получение и сохранение пицц (асинхронный запрос)
//без redux-thunk не будет работать (функция которая возвращает функцию,action)
export const fetchPizzas = (sortBe, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3001/pizzas?category=${category}`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

//сохранение пицц
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

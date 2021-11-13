import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload: false,
});

//получение и сохранение пицц (асинхронный запрос)
//без redux-thunk не будет работать (функция которая возвращает функцию,action)
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

//сохранение пицц
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

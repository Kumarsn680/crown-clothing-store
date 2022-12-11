export const CATEGORIES_INITIAL_STATE = {
  categories: {},
};

export const CATEGORIES_ACTION_TYPES = {
  CHANGE_IN_CATEGORY: "CHANGE_IN_CATEGORY",
};

export const CategoriesReducer = (state = CATEGORIES_INITIAL_STATE,action) =>{
    const {type,payload} = action
    switch (type) {
      case CATEGORIES_ACTION_TYPES.CHANGE_IN_CATEGORY:
        return {
          ...state,
          categories: payload,
        };
      default:
        return state;
    }
}


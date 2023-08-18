import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainCard: [
    // {
    //   id: 101,
    //   groupName: "Aman",
    //   totalSpend: 180,
    //   expenses: [
    //     {
    //       id: 1,
    //       price: 80,
    //       title: "Spent on Food",
    //       date: new Date().toLocaleString(),
    //     },
    //     {
    //       id: 2,
    //       price: 100,
    //       title: "Spent on Car washing and petrol",
    //       date: new Date().toLocaleString(),
    //     },
    //   ],
    // },
    // {
    //   id: 102,
    //   groupName: "Bro",
    //   totalSpend: 200,
    //   expenses: [
    //     {
    //       id: 3,
    //       price: 200,
    //       title: "Spent on Clothes",
    //       date: new Date().toLocaleString(),
    //     },
    //   ],
    // },
    // {
    //   id: 103,
    //   groupName: "Binod",
    //   totalSpend: 0,
    //   expenses: [],
    // },
  ],
};

const getTotal = (group) => {
  let totalPrice = 0;

  group?.expenses?.forEach((item) => {
    totalPrice = Number(totalPrice) + Number(item.price);
  });

  return totalPrice;
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const group = state.mainCard.find(
        (item) => item.id === action.payload.groupId
      );

      let title = action.payload.title;
      title = title.charAt(0).toUpperCase() + title.slice(1);

      group?.expenses?.push({
        id: Date.now(),
        price: action.payload.price,
        title: title,
        date: new Date().toLocaleString(),
      });

      group.totalSpend = getTotal(group);
    },

    editExpense: (state, action) => {
      const group = state.mainCard.find(
        (item) => item.id === action.payload.groupId
      );

      const expenseObj = group?.expenses?.find(
        (item) => item.id === action.payload.expenseId
      );

      expenseObj.price = action.payload.newPrice;
      expenseObj.title = action.payload.newTitle;
      expenseObj.date = new Date().toLocaleString();

      group.totalSpend = getTotal(group);
    },

    deleteExpense: (state, action) => {
      const group = state.mainCard.find(
        (item) => item.id === action.payload.groupId
      );

      group.expenses.splice(
        group.expenses.findIndex(
          (item) => item.id === action.payload.expenseId
        ),
        1
      );

      group.totalSpend = getTotal(group);
    },

    addUser: (state, action) => {
      let username = action.payload.username;
      username = username.charAt(0).toUpperCase() + username.slice(1);

      state.mainCard.push({
        id: Date.now(),
        groupName: username,
        totalSpend: 0,
        expenses: [],
      });
    },

    deleteUser: (state, action) => {
      state.mainCard.splice(
        state.mainCard.findIndex((item) => item.id === action.payload.groupId),
        1
      );
    },
  },
});

export const { addExpense, editExpense, deleteExpense, addUser, deleteUser } =
  expenseSlice.actions;

export default expenseSlice.reducer;

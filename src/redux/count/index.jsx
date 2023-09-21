import { createSelector } from 'reselect';

// Selector để lấy danh sách sản phẩm từ Redux store
const selectShoppingCart = (state) => state.shopping;
// const selectCartItems = (state) => state.shopping;
// Selector để lấy danh sách sản phẩm đã được lọc (ví dụ: theo danh mục)
// export const selectFilteredProducts = createSelector(
//   [selectProducts], // Danh sách các selector bạn muốn sử dụng
//   (products) => {
//     // Trả về danh sách sản phẩm đã được lọc
//     return products.filter((product) => product.category === 'Electronics');
//   }
// );
export const selectTotalItems = createSelector(
    [selectShoppingCart],
    (shoppingCart) =>
      shoppingCart.reduce((total, item) => total + 1, 0)
  );

// Selector để tính tổng giá trị của các sản phẩm đã được lọc
export const selectTotalFilteredValue = createSelector(
  [selectShoppingCart], // Danh sách các selector bạn muốn sử dụng
  (shoppingCart) => {
    // Tính tổng giá trị của các sản phẩm đã được lọc
    return shoppingCart.reduce((total, product) => total + product.price, 0);
  }
);

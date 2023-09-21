import httpsRequire from "../htttps";


export const getProduct = async (params) => {
  const data = await httpsRequire.get("/dukaMarket", {
    params,
  });
  return data;
};

export const addProduct = async (item) => {
  const data =  await httpsRequire.post("/dukaMarket/add",item);
  return data;
};

export const deleteProduct = async (id) => {
  const url = `/dukaMarket/${id}`;
  
    const response = await httpsRequire.delete(url);

    return response


  
};

export const editProduct = async (id, item) => {
  const url = `/dukaMarket/${id}`;
  await httpsRequire.put(url, item)
 };

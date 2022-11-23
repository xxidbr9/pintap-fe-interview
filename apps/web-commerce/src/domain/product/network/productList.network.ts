import appAxios from "@libs/axios"
import { NetworkPromise } from "@utils/types/network"
import { AxiosResponse } from "axios"
import { ProductListEntity } from "../entities/iProductList.entity"

export type IProductListParams = {
  page?: number,
}

type Response = ProductListEntity

function productListNetwork(params: IProductListParams): Promise<AxiosResponse<Response>> {
  return appAxios({
    params,
    url: "/products",
    method: "GET",
  })
}

export default productListNetwork
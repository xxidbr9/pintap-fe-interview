import appAxios from "@libs/axios"
import { NetworkPromise } from "@utils/types/network"
import { AxiosResponse } from "axios"
import { ProductDetailEntity } from "../entities/iProductDetail.entity"


function productDetailNetwork(id: string | number): Promise<AxiosResponse<ProductDetailEntity>> {
  return appAxios({
    url: `/products/${id}`,
    method: "GET",
  })
}

export default productDetailNetwork
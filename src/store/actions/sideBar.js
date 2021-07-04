import { sideBar } from "../types"

export const sideBarAction = (status) => {
  return {
    type:sideBar.SET_SIDEBAR,
    payload: status
  }
}
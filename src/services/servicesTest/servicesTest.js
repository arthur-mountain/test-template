import getAxiosIns from "services/axiosFactory";
const axiosIns = getAxiosIns(process.env.NEXT_PUBLIC_BASEURL);
// GET all
export async function GETv1ALL(params) {
  const url = `/`;
  return axiosIns.get(url);
}
// GET single
export async function GETv1Single(id) {
  const url = `/${id}`;
  return axiosIns.get(url);
}
// POST create
export async function POSTv1Create(params) {
  const url = `/`;
  return axiosIns.post(url, params);
}
// PUT update
export async function PUTv1Update(params) {
  const url = `/`;
  return axiosIns.post(url, params);
}
// PATCH update
export async function PATCHv1Update(params) {
  const url = `/`;
  return axiosIns.patch(url, params);
}
// DELETE delete
export async function DELETEv1Delete(id) {
  const url = `/${id}`;
  return axiosIns.delete(url);
}
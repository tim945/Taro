/*
 * @Author: tim
 * @Date: 2020-11-12 16:59:29
 * @LastEditors: tim
 * @LastEditTime: 2020-11-12 17:01:34
 * @Description: 
 */

interface Seal {
  name: string;
  url: string;
}
interface API {
  "/user": { name: string; age: number; phone: string };
  "/seals": { seal: Seal[] };
}
const api = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then((res) => res.json());
};

// api("/seals").then(res => res.seal)
// api("/user").then(res => res.name)
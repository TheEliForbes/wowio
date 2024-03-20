import { BlizzAPI } from "blizzapi";
import { sensitive } from "../sensitive";

//https://www.npmjs.com/package/blizzapi
const api = new BlizzAPI({
  region: "us",
  clientId: sensitive.clientId,
  clientSecret: sensitive.clientSecret,
});

// For more APIs see https://develop.battle.net/documentation/world-of-warcraft/profile-apis
export async function getData(shouldLog: boolean, extendedRoute?: string) {
  const region = "us";
  const realmSlug = "stormrage";
  const characterName = "zarroe";

  const res = await api.query(
    extendedRoute
      ? `/profile/wow/character/${realmSlug}/${characterName}${extendedRoute}`
      : `/profile/wow/character/${realmSlug}/${characterName}`,
    {
      params: { locale: "en_US" },
      headers: { "Battlenet-Namespace": "profile-us" },
    }
  );
  if (shouldLog) console.log("res", res);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
  return res;
}

export async function getGameData(shouldLog: boolean, route: string) {
  const res = await api.query(`${route}`, {
    params: { locale: "en_US" },
    headers: { "Battlenet-Namespace": "static-us" },
  });
  if (shouldLog) console.log("gameData res:", res);

  return res;
}

export async function getAnyProfileData(shouldLog: boolean, route: string) {
  try {
    const res = await api.query(route, {
      params: { locale: "en_US" },
      headers: { "Battlenet-Namespace": "profile-us" },
    });
    if (shouldLog) console.log("profileData res:", res);
    return res;
  } catch (err) {
    // console.log(err);
  }
}

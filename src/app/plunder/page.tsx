import { Dictionary, Reputation } from "@/util/types";
import styles from "../page.module.css";
import { getData, getGameData } from "@/util/getData";
import { renownData } from "../../data/plunderData.js";
import Image from "next/image";
import PlunderAchievements from "@/components/plunder/plunderAchievements";
import PlunderStanding from "@/components/plunder/plunderStanding";
import Divider from "@/components/divider";

export default async function PlunderIO({}) {
  const kegLegCrewId = 2593;

  const data: Dictionary = (await getData(false, "/reputations")) as any;
  const plunderData: Reputation = data.reputations.filter(
    (rep: any) => rep.faction.id === kegLegCrewId
  )[0];

  const rewardImageUrls: string[] = [];
  const currentRewards =
    renownData.renown_tiers[plunderData.standing.renown_level].rewards;
  for (let i = 0; i < currentRewards.length; i++) {
    if (currentRewards[i].itemId)
      rewardImageUrls.push(
        (
          (await getGameData(
            false,
            "/data/wow/media/item/" + currentRewards[i].itemId
          )) as any
        ).assets[0].value
      );
  }

  const achievementData = (await getData(false, "/achievements")) as any;
  const plunderAchievementIds = { 20508: true, 20509: true };
  const plunderAchievementData = achievementData.achievements.filter(
    (ach) => ach.id in plunderAchievementIds
  );
  const isWonder =
    plunderAchievementData.filter((ach) => ach.id === 20508).length > 0;
  const isKind = plunderData.standing.raw >= 1000000;

  return (
    <main className={styles.main}>
      <h1>Plunder.io</h1>
      <div className={styles.plunderApppanel}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <PlunderStanding
            plunderData={plunderData}
            rewardImageUrls={rewardImageUrls}
          />
          <Divider />
          <PlunderAchievements
            isWonder={isWonder}
            isKind={isKind}
            rawStanding={plunderData.standing.raw}
          />
        </div>
      </div>
    </main>
  );
}

{
  /* <div style={{ whiteSpace: "break-spaces" }}>
          {JSON.stringify(nextRewardData, null, 2)}
        </div> */
}
{
  /* <div style={{ whiteSpace: "break-spaces" }}>
          {JSON.stringify(plunderAchievementData, null, 2)}
        </div> */
}
{
  /* <div style={{ whiteSpace: "break-spaces" }}>
          {JSON.stringify(testmonocole, null, 2)}
        </div> */
}

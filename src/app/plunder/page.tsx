import { Dictionary, Reputation } from "@/util/types";
import styles from "../page.module.css";
import { getData, getGameData } from "@/util/getData";
import { renownData } from "../../data/plunderData.js";
import Image from "next/image";

export default async function PlunderIO({}) {
  //   const data: Dictionary = (await getAnyProfileData(true, "/profile/user/wow")) as any;
  //   const data: Dictionary = (await getData(false)) as any;
  const kegLegCrewId = 2593;
  const kegLegTooltip =
    "Free-spirited crew of misfits causing mischief under the flag of Captain Keg Leg.";

  const data: Dictionary = (await getData(false, "/reputations")) as any;
  const plunderData: Reputation = data.reputations.filter(
    (rep: any) => rep.faction.id === kegLegCrewId
  )[0];

  const testdataimage: Dictionary = (await getGameData(
    false,
    "/data/wow/media/item/216986"
  )) as any;
  const nextRewardImageUrl = testdataimage.assets[0].value;

  const circumference = 52 * 2 * Math.PI; //radius==52
  const progPercent =
    (plunderData.standing.value / plunderData.standing.max) * 100;
  const ringProgress = (percent: number) => {
    if (percent <= 5) percent = 5;
    const offset = circumference - (percent / 100) * circumference;
    if (offset) return offset;
  };

  return (
    <main className={styles.main}>
      <h1>Plunder.io</h1>
      <div className={styles.apppanel}>
        <div
          style={{
            display: "grid",
            justifyItems: "center",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <div className={styles.characterInfoStyle} style={{backgroundImage: `url(./map.png)`}}>
          <h2 title={kegLegTooltip}>Keg Leg&apos;s Crew</h2><br/>
            <svg width="120" height="120">
              <circle
                style={{
                  transition: `0.35s ${ringProgress(progPercent)}`,
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                  strokeDasharray: `${circumference} ${circumference}`,
                  strokeDashoffset: ringProgress(progPercent),
                }}
                stroke="white"
                strokeWidth="4"
                fill="#225bb5aa"
                r="52"
                cx="60"
                cy="60"
              ></circle>
              <text
                x="50%"
                y="53%"
                stroke="#fff"
                strokeWidth="1.5px"
                style={{ textAnchor: "middle" }}
              >
                {plunderData.standing.value}/{plunderData.standing.max}
              </text>
            </svg>
            <div className={styles.characterName}>
              {plunderData.standing.name}
            </div>
            <br />
            <div style={{backgroundColor: "#00000077", padding: '10px', borderRadius: '5px'}}>
              <div className={styles.characterDetail}>
                Next Reward:{" "}
                {renownData.renown_tiers[
                  plunderData.standing.renown_level
                ].rewards.map((reward, i) => (
                  <span key={"reward" + i}>
                    {i > 0 ? ", " : ""}
                    {reward.name}
                  </span>
                ))}
              </div>
              <Image
                src={nextRewardImageUrl}
                alt="Character Logo"
                className={styles.logo}
                style={{ border: "1px solid #225bb5ff" }}
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>

        <div className={styles.divider} />
        {/* <div style={{ whiteSpace: "break-spaces" }}>
          {JSON.stringify(nextRewardData, null, 2)}
        </div> */}
      </div>
    </main>
  );
}

{
  /* <div style={{ whiteSpace: "break-spaces" }}>
          {JSON.stringify(plunderData, null, 2)}
        </div> */
}

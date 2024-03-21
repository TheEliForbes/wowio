import { Dictionary } from "@/util/types";
import styles from "../../app/page.module.css";
import { renownData } from "../../data/plunderData.js";
import Image from "next/image";

export default async function PlunderStanding({
  plunderData,
  rewardImageUrls,
}: {
  plunderData: Dictionary;
  rewardImageUrls: string[];
}) {
  const kegLegTooltip =
    "Free-spirited crew of misfits causing mischief under the flag of Captain Keg Leg.";
  const plunderIconUrl =
    "https://render.worldofwarcraft.com/us/icons/56/inv_misc_coin_01.jpg";
  const progPercent =
    (plunderData.standing.value / plunderData.standing.max) * 100;
  const circumference = 52 * 2 * Math.PI; //radius==52
  const ringProgress = (percent: number) => {
    if (percent <= 5) percent = 5;
    const offset = circumference - (percent / 100) * circumference;
    if (offset) return offset;
  };
  return (
    <div
      style={{
        display: "grid",
        justifyItems: "center",
        textAlign: "center",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <div className={styles.characterInfoStyle}>
        <h1 title={kegLegTooltip}>Keg Leg&apos;s Crew</h1>
        <br />
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
        <div className={styles.characterName}>{plunderData.standing.name}</div>
        <div>
          {"Total Plunder: " + plunderData.standing.raw}
          <Image
            src={plunderIconUrl}
            alt="Plunder Icon"
            style={{
              border: "1px solid #e8b923",
              verticalAlign: "sub",
              marginLeft: "2px",
            }}
            width={18}
            height={18}
          />
        </div>
        <br />
        <div
          style={{
            backgroundColor: "#00000077",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
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
          {rewardImageUrls.map((url, i) => (
            <Image
              key={"url-" + i}
              src={url}
              alt="Character Logo"
              className={styles.logo}
              style={{ border: "1px solid #225bb5ff" }}
              width={60}
              height={60}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

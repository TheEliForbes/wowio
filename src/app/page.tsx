

import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "../util/getData";
import { Dictionary } from "@/util/types";
import RaidInfo from "@/components/raidInfo/raidInfo";
import CharacterInfo from "@/components/characterInfo/characterInfo";

export default async function Home() {
  const data: Dictionary = (await getData(false)) as any;
  const mPlusData: Dictionary = (await getData(
    false,
    "/mythic-keystone-profile"
  )) as any;
  const mPlusRGB = `rgb(${mPlusData.current_mythic_rating.color.r} ${mPlusData.current_mythic_rating.color.g} ${mPlusData.current_mythic_rating.color.b})`;
  const raidData = (await getData(false, "/encounters/raids")) as any;

  return (
    <main className={styles.main}>
      <h1>Zarroe.io</h1>
      <div className={styles.apppanel}>
        <h2>Character Summary</h2>
        {/* CHARACTER DATA */}
        <CharacterInfo data={data} mPlusData={mPlusData} />
        <div className={styles.divider} />
        {/* RAID DATA */}
        <RaidInfo raidData={raidData} />
      </div>
    </main>
  );
}

import Image from "next/image";
import styles from "../../app/page.module.css";
import { getData } from "../../util/getData";
import { Dictionary } from "@/util/types";

export default function CharacterInfo({ data, mPlusData }: {data: Dictionary; mPlusData: Dictionary}) {
  const mPlusRGB = `rgb(${mPlusData.current_mythic_rating.color.r} ${mPlusData.current_mythic_rating.color.g} ${mPlusData.current_mythic_rating.color.b})`;
  return (
    <div className={styles.characterData}>
      <Image
        src="https://render.worldofwarcraft.com/us/character/stormrage/102/245449318-avatar.jpg?alt=/wow/static/images/2d/avatar/4-1.jpg"
        alt="Character Logo"
        className={styles.logo}
        width={75}
        height={75}
      />
      <div className={styles.characterInfoStyle}>
        <span className={styles.characterName}>{data.name}</span>
        <br />
        <span className={styles.characterDetail}>
          &lt;{data.guild.name}&gt;
        </span>
        <br />
        <span className={styles.characterDetail}>{data.realm.name}</span>
      </div>
      <div className={styles.characterInfoStyle}>
        <span
          className={styles.characterName}
          style={{
            color: mPlusRGB,
          }}
        >
          {Math.floor(mPlusData.current_mythic_rating.rating)}io
        </span>
        <br />
        <span className={styles.characterDetail}>Best M+</span>
        <br />
        <span className={styles.characterDetail}>Dragonflight S3</span>
      </div>
      <div className={styles.characterInfoStyle}>
        <span className={styles.characterName}>
          {data.equipped_item_level}/{data.average_item_level}iLvl
        </span>
      </div>
    </div>
  );
}

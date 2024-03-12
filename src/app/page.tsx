import Image from "next/image";
import styles from "./page.module.css";
import { sensitive } from "../sensitive";
import { BlizzAPI } from "blizzapi";
// import { CSSProperties } from "react";

export type Dictionary = {
  [key: string]: any;
};

//https://www.npmjs.com/package/blizzapi
const api = new BlizzAPI({
  region: "us",
  clientId: sensitive.clientId,
  clientSecret: sensitive.clientSecret,
});

async function getData(extendedRoute?: string) {
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
  console.log("res", res);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
  return res;
}

export default async function Home() {
  const data: Dictionary = (await getData()) as any;
  const mPlusData: Dictionary = (await getData(
    "/mythic-keystone-profile"
  )) as any;
  const mPlusRGB = `rgb(${mPlusData.current_mythic_rating.color.r} ${mPlusData.current_mythic_rating.color.g} ${mPlusData.current_mythic_rating.color.b})`;

  return (
    <main className={styles.main}>
      <h1>Zarroe.io</h1>
      <div
        className={styles.lightened}
        style={{
          display: "flex",
          width: "75vw",
          height: "75vh",
          flexDirection: "column",
        }}
      >
        <h3>Summary</h3>
        <div style={{ display: "flex", height: "fit-content" }}>
          <Image
            src="https://render.worldofwarcraft.com/us/character/stormrage/102/245449318-avatar.jpg?alt=/wow/static/images/2d/avatar/4-1.jpg"
            alt="Character Logo"
            className={styles.logo}
            width={50}
            height={50}
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
            <span className={styles.characterName}>9/9</span>
            <br />
            <span className={styles.characterDetail}>Amirdrassil</span>
            <br />
            <span className={styles.characterDetail}>AOTC</span>
          </div>
        </div>
      </div>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}

import styles from "../../app/page.module.css";
import Image from "next/image";

export default async function PlunderAchievements({
  isWonder,
  isKind,
  rawStanding,
}: {
  isWonder: boolean;
  isKind: boolean;
  rawStanding: number;
}) {
  const plunderWonderAchIcon =
    "https://render.worldofwarcraft.com/us/icons/56/inv_helm_armor_pirateeyepatch_b_01_piratespecial.jpg";
  const plunderkindAchIcon =
    "https://render.worldofwarcraft.com/us/icons/56/inv_cape_special_treasure_c_01.jpg";
  const plunderIconUrl =
    "https://render.worldofwarcraft.com/us/icons/56/inv_misc_coin_01.jpg";
  const achievementStyle = {
    display: "flex",
    height: "fit-content",
    alignItems: "center",
    backgroundColor: "#ff8c00aa",
    border: "3px solid #884b1f",
    borderRadius: "3px",
    marginTop: "7px",
    padding: "3px",
  };
  const logoStyle = { border: "1px solid #e8b923", verticalAlign: "bottom" };
  const iconStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginRight: "3px",
  };
  const titleStyle = { fontSize: "30px", fontWeight: "bold" };
  const logoScale = 35;
  return (
    <div
      style={{
        display: "grid",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <div className={styles.characterInfoStyle}>
        <h1 style={{ textAlign: "center" }}>Achievements</h1>
        <div style={achievementStyle}>
          <Image
            src={plunderWonderAchIcon}
            alt="Plunder Wonder Achievement Logo"
            className={styles.logo}
            style={logoStyle}
            width={logoScale}
            height={logoScale}
          />{" "}
          <span style={iconStyle}>{isWonder ? "✔️ " : "🏴‍☠️ "}</span>
          <span style={titleStyle}>Plunder Wonder</span>
        </div>
        <div style={achievementStyle}>
          <Image
            src={plunderkindAchIcon}
            alt="Plunderkind Achievement Logo"
            className={styles.logo}
            style={logoStyle}
            width={logoScale}
            height={logoScale}
          />{" "}
          <span style={iconStyle}>{isKind ? "✔️ " : "🏴‍☠️ "}</span>
          <span style={titleStyle}>Plunderkind</span>
          {!isKind && (
            <span style={{ marginLeft: "10px", fontSize: "20px" }}>
              {"( "}
              {rawStanding}
              {" / 1,000,000 "}
              <Image
                src={plunderIconUrl}
                alt="Plunder Icon"
                style={{
                  border: "1px solid #e8b923",
                  verticalAlign: "sub",
                  marginLeft: "2px",
                }}
                width={20}
                height={20}
              />
              {" )"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { Dictionary } from "@/util/types";
import styles from "../../app/page.module.css";
import { useState } from "react";

export default function RaidInfo({ raidData }: { raidData: Dictionary }) {
  const raidNames = raidData.expansions
    .map((expac: any) => expac.expansion.name)
    .reverse();
  const [selectedRaid, setSelectedRaid] = useState(raidNames[0]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h3 style={{ width: "fit-content", marginRight: "15px" }}>
          Raid Summary
        </h3>
        <select
          id="raids"
          name="raids"
          onChange={(e) => setSelectedRaid(e.target.value)}
          style={{ width: "fit-content" }}
        >
          {raidNames.map((raidName: string) => (
            <option key={raidName} value={raidName}>
              {raidName}
            </option>
          ))}
        </select>
      </div>

      <div>
        {raidData.expansions
          .filter((expac: any) => expac.expansion.name === selectedRaid)
          .map((expac: any, i: number) => (
            <div key={expac + i}>
              {/* <h3>{expac.expansion.name}</h3> */}
              <br />
              {expac.instances.map((inst: any, i: number) => {
                return (
                  <>
                    <div className={styles.raidProgInfo} key={inst + i}>
                      {inst.instance.name}
                      {" - "}
                      <span className={styles.raidProgInfoNums}>
                        {inst.modes.map(
                          (mode: any) =>
                            `${mode.progress.completed_count}/${mode.progress.total_count}${mode.difficulty.type[0]}  `
                        )}
                      </span>
                    </div>
                    <br />
                  </>
                );
              })}
            </div>
          ))}
      </div>
    </div>
  );
}

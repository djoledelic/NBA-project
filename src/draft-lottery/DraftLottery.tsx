import { useState, useEffect } from "react";
import NBALogo from "../util/logos/NBALOGO.png";
import { nbaTeams, NbaTeam } from "../util";

const pick = (teams: NbaTeam[], pick: number) => {
  const odd = Math.round(Math.random() * 1000);
  let winner = 0;
  let sum = 0;
  teams.forEach((x) => {
    if (sum + x.odds[pick - 1] * 10 >= odd && winner === 0) {
      winner = x.projected;
    } else {
      sum += x.odds[pick - 1] * 10;
    }
  });
  return winner;
};

const getDraftOrder = (nbaTeams: NbaTeam[]) => {
  const first = pick(nbaTeams, 1);
  const teamOne = nbaTeams.filter((x) => x.projected === first)[0];

  let second = pick(nbaTeams, 2);
  while (first === second) {
    second = pick(nbaTeams, 2);
  }
  const teamTwo = nbaTeams.filter((x) => x.projected === second)[0];

  let third = pick(nbaTeams, 3);
  while (first === third || second === third) {
    third = pick(nbaTeams, 3);
  }
  const teamThree = nbaTeams.filter((x) => x.projected === third)[0];

  let fourth = pick(nbaTeams, 4);
  while (first === fourth || second === fourth || third === fourth) {
    fourth = pick(nbaTeams, 4);
  }
  const teamFour = nbaTeams.filter((x) => x.projected === fourth)[0];

  const rest = nbaTeams.filter(
    (x) => ![first, second, third, fourth].includes(x.projected)
  );

  return [teamOne, teamTwo, teamThree, teamFour, ...rest].map((x, index) => ({
    ...x,
    pick: index + 1,
  }));
};

const renderTeam = (team: NbaTeam, index: number, blur: boolean) => (
  <div
    style={{
      display: "flex",
      width: 230,
      borderRadius: 5,
      borderStyle: "solid",
      borderColor: "#fff",
      height: 50,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: 20,
          padding: 10,
          marginTop: 5,
          color: "#FFF",
        }}
      >
        <div
          style={{
            width: 35,
            textAlign: "center",
          }}
        >{`${index + 1}.`}</div>
        <div
          style={{
            width: 125,
            filter: blur ? "blur(100px)" : "blur(0px)",
          }}
        >
          {team.name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 45,
          filter: blur ? "blur(100px)" : "blur(0px)",
        }}
      >
        <img src={team.logo} alt="cant render" height="30px" />
      </div>
    </div>
  </div>
);

const DraftLottery = () => {
  const [picked, setPicked] = useState(0);
  const [finalOrder] = useState(getDraftOrder(nbaTeams));

  useEffect(() => {
    if (picked < 14) {
      setTimeout(() => {
        setPicked((picked) => picked + 1);
      }, 2000);
    }
  }, [picked]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 1070,
        borderStyle: "solid",
        borderColor: "#FFF",
        background: "#051c2d",
        fontFamily: "Helvetica",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <div>
          <img src={NBALogo} height="60px" alt="cant render logo" />
        </div>
        <div
          style={{
            marginLeft: 20,
            marginBottom: 4,
            padding: "10px 0px",
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          DRAFT LOTTERY
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", paddingBottom: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            borderStyle: "solid",
            borderColor: "#FFF",
            background: "#051c2d",
            width: 480,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            PROJECTED POSITIONS
          </div>
          {nbaTeams.map(
            (x, index, array) =>
              index < 7 && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ marginRight: 10, padding: "1px 0px" }}>
                    {renderTeam(x, index, false)}
                  </div>
                  <div style={{ padding: "1px 0px" }}>
                    {renderTeam(array[index + 7], index + 7, false)}
                  </div>
                </div>
              )
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            borderStyle: "solid",
            borderColor: "#FFF",
            background: "#051c2d",
            width: 480,
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            FINAL POSITIONS:
          </div>
          {finalOrder.map(
            (x, index, array) =>
              index < 7 && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      marginRight: 10,
                      padding: "1px 0px",
                    }}
                  >
                    {renderTeam(x, index, x.pick + picked < 15)}
                  </div>
                  <div
                    style={{
                      padding: "1px 0px",
                    }}
                  >
                    {renderTeam(
                      array[index + 7],
                      index + 7,
                      array[index + 7].pick + picked < 15
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default DraftLottery;

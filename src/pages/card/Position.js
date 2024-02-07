export function Position() {
  const positions = [
    "GK",
    "CB",
    "RB",
    "LB",
    "CM",
    "CDM",
    "CAM",
    "RM",
    "LM",
    "ST",
    "RW",
    "LW",
  ];

  let posP = Math.floor(Math.random(12) * (12 - 0) + 0);
  let resultP = positions[posP];

  return <div>{resultP}</div>;
}

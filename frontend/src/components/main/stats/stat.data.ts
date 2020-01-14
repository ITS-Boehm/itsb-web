import { StatModel } from "./stat.model";

// TODO #27: Load some data from a database.
export const statData: StatModel[] = [
  {
    upperTitle: "bislang",
    lowerTitle: "vollendete Projekte",
    target: 17
  },
  {
    upperTitle: "über",
    lowerTitle: "erstellte Codezeilen",
    target: 410,
    startAt: 150,
    suffix: "k"
  },
  {
    upperTitle: "aktuell",
    lowerTitle: "aktive Kunden",
    target: 8
  }
];

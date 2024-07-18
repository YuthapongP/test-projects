import React, { Fragment } from "react";
import {
  MonthMatchType,
  DayMatchType,
  ProvicesType,
  ItineraryType,
} from "./Itinerary.type";
import { ItineraryStyle } from "./ItinStyleCompo";
import { SaveAsTextButton } from "./SaveItinerary";

const dayMatch: DayMatchType = {
  1: "W1",
  2: "W2",
  3: "W3",
  4: "W4",
  5: "W5",
  6: "W6",
};

const monthMatch: MonthMatchType = {
  1: "JAN",
  2: "FEB",
  3: "MAR",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC",
};

const thailandProvinces: ProvicesType = [
  "Amnat Charoen",
  "Ang Thong",
  "Bangkok",
  "Bueng Kan",
  "Buriram",
  "Chachoengsao",
  "Chai Nat",
  "Chaiyaphum",
  "Chanthaburi",
  "Chiang Mai",
  "Chiang Rai",
  "Chonburi",
  "Chumphon",
  "Kalasin",
  "Kamphaeng Phet",
  "Kanchanaburi",
  "Khon Kaen",
  "Krabi",
  "Lampang",
  "Lamphun",
  "Loei",
  "Lopburi",
  "Mae Hong Son",
  "Maha Sarakham",
  "Mukdahan",
  "Nakhon Nayok",
  "Nakhon Pathom",
  "Nakhon Phanom",
  "Nakhon Ratchasima",
  "Nakhon Sawan",
  "Nakhon Si Thammarat",
  "Nan",
  "Narathiwat",
  "Nong Bua Lamphu",
  "Nong Khai",
  "Nonthaburi",
  "Pathum Thani",
  "Pattani",
  "Phang Nga",
  "Phatthalung",
  "Phayao",
  "Phetchabun",
  "Phetchaburi",
  "Phichit",
  "Phitsanulok",
  "Phra Nakhon Si Ayutthaya",
  "Phrae",
  "Phuket",
  "Prachinburi",
  "Prachuap Khiri Khan",
  "Ranong",
  "Ratchaburi",
  "Rayong",
  "Roi Et",
  "Sa Kaeo",
  "Sakon Nakhon",
  "Samut Prakan",
  "Samut Sakhon",
  "Samut Songkhram",
  "Saraburi",
  "Satun",
  "Sing Buri",
  "Sisaket",
  "Songkhla",
  "Sukhothai",
  "Suphan Buri",
  "Surat Thani",
  "Surin",
  "Tak",
  "Trang",
  "Trat",
  "Ubon Ratchathani",
  "Udon Thani",
  "Uthai Thani",
  "Uttaradit",
  "Yala",
  "Yasothon",
];

const Itinerary: React.FC<ItineraryType> = ({ day, month }) => {
  const randomProvinces = () => {
    const randomP = Math.floor(Math.random() * thailandProvinces.length);
    return thailandProvinces[randomP];
  };

  // const randomProvinces = (day: number) => {
  //   const finalRandomProvinces = [];
  //   for (let x = 0; x < day; x++) {
  //     const randomP = Math.floor(Math.random() * thailandProvinces.length);
  //     finalRandomProvinces.push(thailandProvinces[randomP]);
  //   }
  //   return finalRandomProvinces;
  // };

  console.log(randomProvinces());

  const allObj = [];

  const matchDay = (d: number) => {
    const allDays: string[] = [];

    for (let x = 0; x < d; x++) {
      const keyAsString = (x + 1).toString();
      if (dayMatch.hasOwnProperty(keyAsString)) {
        allDays.push(dayMatch[keyAsString]);
      }
    }
    return allDays;
  };

  const matchMonth = (m: number) => {
    const allMonths: string[] = [];

    for (let x = 0; x < m; x++) {
      const keyMonth = (x + 1).toString();
      if (monthMatch.hasOwnProperty(keyMonth)) {
        allMonths.push(monthMatch[keyMonth as unknown as number]);
      }
    }
    allObj.push(allMonths);
    return allMonths;
  };

  return (
    <Fragment>
      <ItineraryStyle>
        {matchMonth(month).map((m) => (
          <div className="month" key={m}>
            <div>{m}</div>
            <br />
            {matchDay(day).map((d) => (
              <div className="day" key={d}>
                <div style={{ display: "inline-block" }}>
                  {d} &nbsp; | &nbsp;{" "}
                </div>
                {randomProvinces()}
              </div>
            ))}
          </div>
        ))}
      </ItineraryStyle>
      <SaveAsTextButton data={thailandProvinces}></SaveAsTextButton>
    </Fragment>
  );
};

export default Itinerary;

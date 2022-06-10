import { useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart/Chart";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { subDays } from "date-fns";

const InfoPage = () => {
  let { pair } = useParams();
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 5),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  console.log(state[0]);

  const availablePairs = ["eur_usd", "usd_gbp"];

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <Chart start={state[0].startDate} end={state[0].endDate} />
    </div>
  );
};
export default InfoPage;

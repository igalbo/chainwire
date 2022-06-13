import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart/Chart";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { subDays } from "date-fns";

const url = "https://chainwire-server.herokuapp.com/rates/";

const InfoPage = () => {
  const { pair } = useParams();
  const base_currency = pair.split("_")[0].toUpperCase();
  const currency = pair.split("_")[1].toUpperCase();

  const [rates, setRates] = useState([]);
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 15),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        start_date: state[0].startDate,
        end_date: state[0].endDate,
        base_currency: base_currency,
        currency: currency,
      },
    })
      .then((results) => results.json())
      .then(({ data }) => setRates(data))
      .catch((err) => console.log(err.message));
  }, [state, base_currency, currency]);

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      {rates ? (
        <Chart
          start={state[0].startDate}
          end={state[0].endDate}
          rates={rates}
          currency={currency}
        />
      ) : (
        <p>No data to show</p>
      )}
    </div>
  );
};
export default InfoPage;

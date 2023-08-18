import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

const Cards = () => {
  const totalCards = useSelector((prev) => prev.expense.mainCard);

  const labelArray = [];
  const spendArray = [];

  totalCards?.map(
    // eslint-disable-next-line no-sequences
    (d) => (labelArray.push(d.groupName), spendArray.push(d.totalSpend))
  );

  const totalMoneySpended =
    spendArray.length > 0 ? spendArray?.reduce((acc, curr) => acc + curr) : 0;

  const everyoneShare =
    spendArray?.length > 0
      ? Number(totalMoneySpended / totalCards?.length).toFixed(2)
      : 0;

  return (
    <>
      <div className="mt-20 flex flex-col sm:flex-row justify-center md:justify-around items-center gap-6 my-4">
        {spendArray?.length > 0 && (
          <div>
            <Chart
              type="pie"
              width={400}
              // height={320}
              series={spendArray}
              options={{
                labels: labelArray,
                legend: {
                  position: "bottom",
                },
                dataLabels: {
                  enabled: true,
                  formatter: function (val, opt) {
                    return "₹" + opt.w.globals.series[opt.seriesIndex];
                  },
                  offsetX: 0,
                },
                colors: [
                  "#2E93fA",
                  "#66DA26",
                  "#546E7A",
                  "#E91E63",
                  "#FF9800",
                  "#123456",
                  "#00ff00",
                  "#cd4f4f",
                  "#296136",
                  "#dcdc44",
                  "#746ab0",
                  "#288b88",
                  "#e389b8",
                  "#ffce30",
                  "#ff7373",
                  "#c6e2ff",
                ],
                stroke: {
                  show: true,
                  curve: "smooth",
                  width: 1,
                },
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 300,
                      },
                      legend: {
                        position: "bottom",
                      },
                    },
                  },
                ],
              }}
            />
          </div>
        )}
        <div className="border w-full sm:max-w-sm rounded-md px-2 py-1 bg-[#f3f3f2] drop-shadow-2xl ">
          <div className="flex flex-col gap-2">
            <h4 className="text-center text-lg font-medium">Stats</h4>
            <p> • Total People: {totalCards?.length}</p>
            <p> • Total Money Spent: ₹{totalMoneySpended}</p>
            <p>• Everyone's Share: ₹{everyoneShare}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-5 ">
        {totalCards.map((data) => (
          <Card key={data?.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Cards;

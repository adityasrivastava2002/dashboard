import Card from "./Card";
import { cardData } from "../../assets/data/cardsData"

export default function Home() {
  return (
    <div className="px-20 py-10 w-[72%] max-lg:h-[100%] max-lg:w-[100%] max-sm:mx-auto">
      <h1 className="text-2xl text-white max-xl:text-center">Hey, <span className="text-yellow-new">Name!</span></h1>
      <h1 className="text-2xl text-white max-xl:text-center">How&#39;s your prep for the, <span className="text-yellow-new">March SAT</span></h1>
      <div className="flex flex-wrap gap-6 py-6 max-xl:justify-center">
        {
          cardData.map((data,i)=>(
            <div key={i} className="">
              <Card
                text = {data.text}
                date = {data.date}
                mainHeading = {data.mainHeading}
                description = {data.description}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

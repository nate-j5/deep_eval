import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { GitHub, Twitter } from "lucide-react";

export default function Home() {
  // Updated basketball icons array to include the schools, sport, and year
  const basketballIcons = [
    {
      name: "West Florida vs Valdosta State",
      sport: "Men's Basketball",
      year: 2014,
    },
    {
      name: "Lewis vs Wisconsin-Parkside",
      sport: "Women's Basketball",
      year: 2016,
    },
    {
      name: "Roosevelt University vs Mckendree",
      sport: "Men's Basketball",
      year: 2018,
    },
    {
      name: "West Florida vs Central Florida",
      sport: "Men's Basketball",
      year: 2017,
    },
    {
      name: "South-Illinois Edwardsville vs Loyola-Chicago",
      sport: "Men's Basketball",
      year: 2018,
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Evaluate Basketball Offense
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Analyze and improve your team's offensive performance
          </p>
        </div>

        {/* Main CTA - Video/Image placeholder */}
        <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
          {/* Placeholder - replace with actual video or image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-foreground text-background rounded-full p-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        </div>

        {/* Icon Carousel */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">View Games</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {basketballIcons.slice(0, 3).map((item, index) => (
                <CarouselItem key={index} className="">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                        {/* Using the first letter of the team as placeholder */}
                        <span className="text-xl">{item.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs font-light">
                        {item.sport} - {item.year}
                      </span>
                      <div className="mt-4">
                        <a
                          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                          href="#view-evaluation"
                        >
                          View Evaluation
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#analyze"
          >
            Add Video
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="#learn"
          >
            Our Library
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center text-sm gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center text-sm gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/your-twitter-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </footer>
    </div>
  );
}

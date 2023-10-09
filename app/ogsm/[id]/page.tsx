import Card from "@/components/Card";
import RichTextField from "@/components/RichTextField";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { LinkIcon, EyeIcon, PrinterIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

interface SectionProps {
  title: string | ReactNode;
  children: ReactNode;
  className?: string;
}
function Section({ title, children, className }: SectionProps) {
  return (
    <div className={className + " flex h-full flex-col"}>
      <h2 className="py-1 text-sm text-gray-500">{title}</h2>
      <div className="grow">{children}</div>
    </div>
  );
}

const demo_strategies = [
  {
    strategy:
      "<p><strong>Sustainability</strong> Promoting sustainability and reducing the ecological footprint of the municipality.</p>",
    dashboard: [
      "<p>Reducing the CO2 emissions of the municipality by 50% in the next 5 years.</p>",
      "<p>Promoting the use of renewable energy sources in the municipality.</p>",
    ],
    actions: [
      "<p>Promoting energy efficiency and the use of renewable energy sources in public buildings.</p>",
      "<p>Stimulating recycling and waste reduction through awareness campaigns and facilities.</p>",
      "<p>Implement monitoring of CO2 emissions and reporting of progress in emission reduction.</p>",
    ],
  },
  {
    strategy:
      "<p><strong>Quality of life</strong> Creating a safe and pleasant living environment for all residents by improving the green areas and maintaining public spaces.</p>",
    dashboard: [
      "<p>#m2 of public green space</p>",
      "<p>Reducing nuisance and crime within the municipality.</p>",
    ],
    actions: [
      "<p>Increase police presence and implement preventive security measures.</p>",
      "<p>Investing in green areas and creating recreational spaces for residents.</p>",
    ],
  },
];

export default function Ogsm() {
  return (
    <>
      <Link
        href="/dashboard"
        className="mb-1 mt-14 flex items-center text-sm text-gray-600 transition hover:text-gray-700"
      >
        <ArrowLeftIcon className="mr-1 h-4 w-4" />
        Back
      </Link>
      <div className="mb-6 flex items-center justify-between">
        <div className="">
          <h1>Municipality Energy Neutral Goal</h1>
          <p className="text-sm text-gray-500">
            Created by Korbin de Man &mdash; 14 Members
          </p>
        </div>
        <div className="flex gap-1">
          <div className="cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <LinkIcon className="h-5 w-5" />
            </span>
          </div>
          <div className="cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <PrinterIcon className="h-5 w-5" />
            </span>
          </div>
          <div className="cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
            <span className="flex items-center gap-1 px-1 text-sm text-gray-600">
              <EyeIcon className="h-5 w-5" />
              Viewing
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Section title="Objective" className="col-span-5">
          <Card noPadding>
            <div className="p-1 py-4">
              <RichTextField content="Our municipality is energy neutral for 2030 through energy-neutral generation and reduction of energy consumption" />
            </div>
          </Card>
        </Section>
        <Section title="Goals" className="">
          <Card noPadding>
            <div className="p-1">
              <RichTextField content="<p><strong>Energy-neutral municipalities</strong></p>" />
              <RichTextField content="<p>Co2 emissions</p>" />
              <RichTextField content="<p><strong>Budget sustainability program</strong></p>" />
              <RichTextField content="<p>#FTE</p>" />
              <RichTextField content="<p>Annual budget</p>" />
            </div>
          </Card>
        </Section>
        <Section
          title={
            <div className="grid grid-cols-4">
              <h2 className="text-sm text-gray-500">Strategy</h2>
              <h2 className="text-sm text-gray-500">Dashboard</h2>
              <h2 className="text-sm text-gray-500">Actions</h2>
            </div>
          }
          className="col-span-4"
        >
          <Card noPadding>
            {demo_strategies.map((strategy) => (
              <div
                className="grid grid-cols-4 border-b last:border-0"
                key={strategy.strategy}
              >
                <div className="border-r p-1">
                  <RichTextField content={strategy.strategy} />
                </div>
                <div className="border-r p-1">
                  {strategy.dashboard.map((dashboard) => (
                    <RichTextField content={dashboard} key={dashboard} />
                  ))}
                </div>
                <div className="col-span-2 p-1">
                  {strategy.actions.map((action) => (
                    <RichTextField content={action} key={action} />
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </Section>
        <div className="col-span-4"></div>
      </div>
    </>
  );
}

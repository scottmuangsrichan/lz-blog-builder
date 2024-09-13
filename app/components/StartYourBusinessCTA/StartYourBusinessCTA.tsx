import { Form } from "@remix-run/react";

export default function StartYourBusinessCTA() {
  return (
    <div className="mt-8 bg-accent-5 px-10 py-8">
      <Form className="flex w-full flex-col flex-wrap items-center gap-4 md:flex-row ">
        <span className="highlight-2 font-bold text-2xl w-full shrink-0 text-center lg:w-fit">
          Ready to start your business? Plans start at $0 + filing fees.
        </span>
        <div className="flex flex-grow flex-row flex-wrap gap-4 md:gap-0">
          <input
            type="text"
            placeholder="What's Your Business Name"
            className="
            h-18 w-full flex-1 rounded-full border-4 border-orange-600 bg-transparent py-5
            text-center
            text-black focus-visible:outline-0
            md:mr-[-35px] md:rounded-r-none
            lg:w-7/12
            lg:pl-9 lg:text-left"
          />
          <button className="font-bold btn btn-action h-[72px] w-full !rounded-full border-r-0 lg:w-5/12 lg:border-r-0 bg-orange-600 text-white">
            Check Availability
          </button>
        </div>
      </Form>
    </div>
  );
}

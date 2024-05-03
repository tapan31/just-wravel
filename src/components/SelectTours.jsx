import { Checkbox, Label } from "flowbite-react";

function SelectTours() {
  return (
    <div className="hidden md:block py-4 px-4 rounded-md bg-white shadow-lg shadow-slate-300 my-3">
      <h2 className="text-3xl mb-5 font-semibold">Select from our tours</h2>

      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="upcoming" />
        <Label htmlFor="upcoming" className="text-lg">
          Upcoming Trips
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="biking" />
        <Label htmlFor="biking" className="text-lg">
          Biking Trips
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="new" />
        <Label htmlFor="new" className="text-lg">
          New Launches
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="" />
        <Label htmlFor="" className="text-lg">
          Backpacking Trips
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="" />
        <Label htmlFor="" className="text-lg">
          Himalayan Treks
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="" />
        <Label htmlFor="" className="text-lg">
          Weekend Getaways
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="" />
        <Label htmlFor="" className="text-lg">
          International Community Trips
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="" />
        <Label htmlFor="" className="text-lg">
          All Girls Trips
        </Label>
      </div>
      <div className="flex items-center gap-2 mt-3 font-normal">
        <Checkbox id="" />
        <Label htmlFor="" className="text-lg">
          Best Sellers
        </Label>
      </div>
    </div>
  );
}

export default SelectTours;

import { useState } from "react";
import { Calendar } from "./components/ui/calendar";
import { ThemeToggle } from "./components/ui/theme";
import type { DateRange } from "react-day-picker";
import { useId } from "react";
import DatePickerDemo from "./date-picker";

function App() {
  const [date1, setDate1] = useState<Date | undefined>(undefined);
  const [date2, setDate2] = useState<DateRange | undefined>(undefined);
  const [date3, setDate3] = useState<Date[] | undefined>([]);
  const uuid = useId();

  return (
    <div className="flex flex-col items-start gap-4 bg-background p-4 text-foreground">
      <div className="fixed right-4 bottom-4">
        <ThemeToggle />
      </div>
      <div className="flex gap-4">
        <Calendar mode="single" selected={date1} onSelect={setDate1} />
        <span>{date1?.toISOString()}</span>
      </div>
      <div className="flex gap-4">
        <Calendar mode="range" selected={date2} onSelect={setDate2} />
        <div className="flex flex-col">
          <span>from {date2?.from?.toISOString()} </span>
          <span>to {date2?.to?.toISOString()}</span>
        </div>
      </div>
      <div className="flex gap-4">
        <Calendar mode="multiple" selected={date3} onSelect={setDate3} />
        <div className="flex flex-col">
          {date3?.map((date, index) => (
            <span key={`${uuid}:${index}`}>{date.toISOString()}</span>
          ))}
        </div>
      </div>
      <DatePickerDemo />
    </div>
  );
}

export default App;

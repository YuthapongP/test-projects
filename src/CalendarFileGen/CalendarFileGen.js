import ical from "ical-generator";
import { writeFileSync } from "fs";

const cal = ical({ name: "My Calendar" });

cal.createEvent({
  start: new Date(2024, 0, 1, 9, 0),
  end: new Date(2024, 0, 1, 10, 0),
  summary: "News Update Event",
  description:
    "Local journalists told the BBC that an Israeli warplane fired two missiles at classrooms on the top floor of the school in the Nuseirat refugee camp.",
  location: "Online",
});

// Save to file
writeFileSync("news_update.ics", cal.toString());

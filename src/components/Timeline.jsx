import timeline_data from "../data/timeline_data";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline_data.map((item) => (
          <TimelineItem
            key={item.title}
            year={item.year}
            title={item.title}
            details={item.details}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;

import PropTypes from "prop-types";
function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md-flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md dark:text-stone-900 dark:bg-white">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </div>
        <ul className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details.map((detail, index) => (
            <li
              key={index}
              className="my-2 font-normal text-stone-900 dark:text-stone-400"
            >
              {detail}
            </li>
          ))}
        </ul>
      </li>
    </ol>
  );
}
TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default TimelineItem;

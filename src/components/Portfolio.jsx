import portfolio_data from "../data/portfolio_data";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio_data.map((project) => (
          <PortfolioItem
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            link={project.link}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

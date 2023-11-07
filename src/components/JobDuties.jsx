import { nanoid } from "nanoid";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobDuties = props => {
  const { duties } = props;

  return (
    <div>
      {duties.map(duty => (
        <div key={nanoid()} className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          {duty}
        </div>
      ))}
    </div>
  );
};

export default JobDuties;

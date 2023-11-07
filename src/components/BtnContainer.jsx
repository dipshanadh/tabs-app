const BtnContainer = props => {
  const { jobs, current, setCurrent } = props;

  return (
    <div className="btn-container">
      {jobs.map(job => (
        <button
          key={job.id}
          className={`job-btn ${job.id === current && "active-btn"}`}
          onClick={() => setCurrent(job.id)}>
          {job.company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;

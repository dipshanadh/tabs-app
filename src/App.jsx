import { useEffect, useState } from "react";

import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [current, setCurrent] = useState(null);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setJobs(data);
    setCurrent(data[0].id);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} current={current} setCurrent={setCurrent} />
      <JobInfo jobs={jobs} current={current} />
    </section>
  );
};

export default App;

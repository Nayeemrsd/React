import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import Filter from "../components/Filter";

interface post {
  area: string;
  createdAt: string;
  description: string;
  id: string;
  joining_date: string;
  name: string;
  posted_user: string;
  type: string;
}

function JobList() {
  const [jobs, setJobs] = useState<post[]>([]);
  const [searchItem, setSearchItem] = useState("");
  const [filterJobs, setFilterJobs] = useState<post[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState("");

  const api = "https://690846acb49bea95fbf2e81f.mockapi.io/api/v1/get-all-jobs";

  async function getAllJobs() {
    try {
      const response = await fetch(api);
      const allJobs = await response.json();
      const types = allJobs.map((job: post) => job.type);

      const uniqueJobs: string[] = [];
      types.forEach((type: any) => {
        if (!uniqueJobs.includes(type)) {
          uniqueJobs.push(type);
        }
      });
      setJobTypes(uniqueJobs);
      setJobs(allJobs);
      setFilterJobs(allJobs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (searchItem || selectedType) {
      const filterJobs = jobs.filter((job) => {
        return (
          (searchItem &&
            job.name.toLowerCase().includes(searchItem.toLowerCase())) ||
          job.type === selectedType
        );
      });
      setFilterJobs(filterJobs);
    } else setFilterJobs(jobs);
  }, [searchItem, jobs, selectedType]);

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      <SearchBox setSearchItem={setSearchItem} />
      <br />
      <Filter jobTypes={jobTypes} setSelectedType={setSelectedType} />
      <br />
      <div>
        {" "}
        {filterJobs.map((job: post) => (
          <Card
            key={job.id}
            name={job.name}
            area={job.area}
            createdAt={job.createdAt}
            description={job.description}
            id={job.id}
            joining_date={job.joining_date}
            posted_user={job.posted_user}
            type={job.type}
          />
        ))}
      </div>
    </>
  );
}

export default JobList;

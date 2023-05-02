import React, { useEffect } from "react";
import { SearchContainer, JobsContainer } from "../../components";
import { getAllJobs } from "../../features/allJobs/allJobsSlice.jsx";
import { useDispatch } from "react-redux";
const AllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;

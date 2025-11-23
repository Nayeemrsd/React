function Filter({
  jobTypes,
  setSelectedType,
}: {
  setSelectedType: (value: string) => void;
  jobTypes: string[];
}) {
  return (
    <>
      <form className="max-w-md mx-auto ">
        <select
          name=""
          id=""
          onChange={(e: any) => setSelectedType(e.target.value)}
        >
          <option value=""> Select Job Type</option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}

export default Filter;

import Dropdown from "./Dropdown";

const FILTERS = [
  { value: "all", name: "Show all" },
  { value: "completed", name: "Show only completed" },
  { value: "pending", name: "Show only pending" },
];

export default function Filter({ filter, setFilter }) {
  return (
    <>
      {/* <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        {FILTERS.map((filter) => (
          <option value={filter.value} key={filter.value}>
            {filter.name}
          </option>
        ))}
      </select> */}
      <Dropdown options={FILTERS} selected={filter} onSelected={setFilter} />
    </>
  );
}

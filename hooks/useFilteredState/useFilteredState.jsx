const { useState } = require("react");

// example filter
const filterLongNamedItems = {
  filterName: "longNamedItems",
  filterFn: (item) => item.name.length > 10,
};

const useFilteredState = (originalState, initialFilters = null) => {
  const [filters, setFilters] = useState(initialFilters || []);

  const toggleFilter = (filter) => {
    const foundFilter = filters.find((f) => f.filterName === filter.filterName);

    if (foundFilter) {
      setFilters(filters.filter((f) => f.filterName !== filter.filterName));
      //   gaurd clause return
      return;
    }

    setFilters([...filters, filter]);
  };

  const overwriteFilter = (filter) => {
    const filtersWithoutOverwritten = filters.filter(
      (f) => f.filterName !== filter.filterName
    );
    setFilters([...filtersWithoutOverwritten, filter]);
  };

  const filteredState = originalState.filter((item) =>
    filters.every((filter) => filter.filterFn(item))
  );

  return {
    filteredState,
    toggleFilter,
    overwriteFilter,
  };
};

export default useFilteredState;

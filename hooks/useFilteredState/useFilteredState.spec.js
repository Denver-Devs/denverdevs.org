import useFilteredState from "./";
import { useState } from "react";
import { renderHook, act } from "@testing-library/react-hooks";

const testItems = [
  {
    id: 1,
    name: "item 1",
  },
  {
    id: 2,
    name: "item 2",
  },
  {
    id: 3,
    name: "item 3",
  },
];

const idGreaterThan1Filter = {
  filterName: "idGreaterThan1",
  filterFn: (item) => item.id > 1,
};

const idLessThan3Filter = {
  filterName: "idLessThan3",
  filterFn: (item) => item.id < 3,
};

describe("useFilteredState", () => {
  it("should show all items when no inital filters are passed", () => {
    const { result } = renderHook(() => useFilteredState(testItems));
    expect(result.current.filteredState).toEqual(testItems);
  });

  it("should show 2 and 3 when greater than 1", () => {
    const { result } = renderHook(() => useFilteredState(testItems));
    act(() => {
      result.current.toggleFilter(idGreaterThan1Filter);
    });
    expect(result.current.filteredState).toEqual([testItems[1], testItems[2]]);
  });

  it("should show 1 and 2 when less than 3", () => {
    const { result } = renderHook(() => useFilteredState(testItems));
    act(() => {
      result.current.toggleFilter(idLessThan3Filter);
    });
    expect(result.current.filteredState).toEqual([testItems[0], testItems[1]]);
  });

  it("should be able to overwrite an existing filter", () => {
    const { result } = renderHook(() => useFilteredState(testItems));
    act(() => {
      result.current.toggleFilter(idLessThan3Filter);
    });
    act(() => {
      result.current.overwriteFilter({
        filterName: idLessThan3Filter.filterName,
        filterFn: (item) => item.id === 2,
      });
    });
    expect(result.current.filteredState).toEqual([testItems[1]]);
  });

  it("should show only 2 when both filters on", () => {
    const { result } = renderHook(() => useFilteredState(testItems));
    act(() => {
      result.current.toggleFilter(idLessThan3Filter);
    });
    act(() => {
      result.current.toggleFilter(idGreaterThan1Filter);
    });
    expect(result.current.filteredState).toEqual([testItems[1]]);
  });

  it("You can set initial filters", () => {
    const { result } = renderHook(() =>
      useFilteredState(testItems, [idLessThan3Filter, idGreaterThan1Filter])
    );
    expect(result.current.filteredState).toEqual([testItems[1]]);
  });

  it("You can use toggle filter to remove a filter", () => {
    const { result } = renderHook(() =>
      useFilteredState(testItems, [idLessThan3Filter, idGreaterThan1Filter])
    );

    act(() => {
      result.current.toggleFilter(idGreaterThan1Filter);
    });

    expect(result.current.filteredState).toEqual([testItems[0], testItems[1]]);
  });

  const useFakeState = () => {
    const [items, setItems] = useState(testItems);
    const { filteredState, toggleFilter } = useFilteredState(items);
    return {
      items,
      setItems,
      toggleFilter,
      filteredState,
    };
  };

  it("If the state of a parent component changes, so does the filtered state", () => {
    const { result } = renderHook(() => useFakeState());

    act(() => {
      result.current.toggleFilter(idGreaterThan1Filter);
    });

    expect(result.current.filteredState).toEqual([testItems[1], testItems[2]]);

    const lastItem = { id: 4, name: "item 4" };
    act(() => {
      result.current.setItems([...result.current.items, lastItem]);
    });

    expect(result.current.filteredState).toEqual([
      testItems[1],
      testItems[2],
      lastItem,
    ]);

    const itemThatShouldBeFilteredOut = { id: 0, name: "item 0" };

    act(() => {
      result.current.setItems([
        itemThatShouldBeFilteredOut,
        ...result.current.items,
      ]);
    });

    // Make sure that the item doesn't get added to the filtered state
    expect(result.current.filteredState).toEqual([
      testItems[1],
      testItems[2],
      lastItem,
    ]);
  });
});

export const isRemoteFilter = {
  filterName: "isRemote",
  filterFn: (item) => item.location.includes("remote"),
};

export const createIsMineFilter = (user) => ({
  filterName: "isMine",
  filterFn: (item) => item?.user_id === user?.id,
});

export const createIsNotMineFilter = (user) => ({
  filterName: "isNotMine",
  filterFn: (item) => item?.user_id !== user?.id,
});

export const createIncludeTagsFilter = (tags) => ({
  filterName: "includeTags",
  filterFn: (item) => {
    if (tags.length > 0) {
      return tags.some((tag) => item.tags.includes(tag.value));
    }
    return true;
  },
});

export const createIncludeLocationsFilter = (locations) => ({
  filterName: "includeLocations",
  filterFn: (item) => {
    if (locations.length > 0) {
      return locations.some((location) =>
        item.location.includes(location.value)
      );
    }
    return true;
  },
});

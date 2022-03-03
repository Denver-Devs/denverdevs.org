# useFilteredState

The purpose of this hook is just to have an easy way of filtering state. Lets say that I have a list of items that looks like this.

```ts
const items = [
 {
  price: 100,
  name: "furby",
  tags: ["cute", "90s"]
 },
 {
  price: 10,
  name: "pokemon card pack",
  tags: ["epic", "90s"]
 },
]
```

Then in your app somewhere you want to render a filtered list of those items. You can call on useFilterState in order to accomplish this easily.

First we have to create filters. They all look something like this.

```ts
const itemNameIncludesTheWordCardFilter = {
 filterName: "itemByName",
 filterFn: (item) => item
  .name
  .toLowercase()
  .includes("card")
}
```

If we want to encapsulate some piece of data into a filter we can use a create filter function to make a filter

```ts
const createItemNameIncludesFilter = (substring) => {
 return {
  filterName: "itemByName",
  filterFn: (item) => { 
    // If our search is empty show everything
    if(substring.length === 0){
      return true
    }
    // only show the item if our substring is inside of the name
    return item
      .name
      .toLowercase()
      .includes(substring)
  }
 }
}
```

If you want to filter state a good place to do this is in the utils file.

To use this in a component, here is an example of what you might do.

```jsx
import {
  createItemIncludesFilter,
  isItem90sFilter,
} from "../filters"

const ItemList = () => {
  const {
    filteredState: filteredItems, // just renaming filteredState to filteredItems for convenience
    toggleFilter,
    overwriteFilter,
  } = useFilteredState(items) // here items is a constant but it can also be a peice of state

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    // because we don't want to toggle a filter in this circumstance, we are instead overwriting that filter each 
    // time the search text string changes
    // since a filter always has to have a filterName key, it will know which one to overwrite
    overwriteFilter(
      createItemNameIncludesFilter(searchText)
    )
  },[searchText])

 return (
  <div>
    <div id="filter-control-box">
      <Switch
        onChange={() => {
          toggleFilter(isItem90sFilter);
        }}
      >
        90's Items
      </Switch>
      <input 
        type="text" 
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
        placeholder="search text"
      >
    </div>

    <div id="items-container">
      {
        filteredItems.map(item => {
          return <Item key={item.name} item={item}>
        })
      }
    </div>
  </div>
 )
}
```

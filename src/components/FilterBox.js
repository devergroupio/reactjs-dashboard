import React from "react";
import { Input, Slider, Checkbox, Button } from "antd";
const FilterBox = ({ dispatch, filter, onSearch }) => {
  const onKeywordChange = (e) => {
    dispatch({
      type: "SET_SEARCH",
      payload: e.target.value,
    });
  };
  const onChangeStatus = (e) => {
    dispatch({
      type: "SET_AVAILABLE_STATUS",
      payload: e.target.checked,
    });
  };
  const onChangePriceRange = ([min, max]) => {
    dispatch({
      type: "SET_PRICE_RANGE",
      payload: {
        min,
        max,
      },
    });
  };
  return (
    <div className="filter">
      <Input
        className="search"
        placeholder="Find Products"
        value={filter.search}
        onChange={onKeywordChange}
      />
      <div className="spacer-20"></div>

      <Checkbox
        checked={filter.availableOnly}
        onChange={onChangeStatus}
        style={{
          color: "white",
        }}
      >
        Only Available Products
      </Checkbox>
      <div className="spacer-20"></div>
      <div class="price_slider">
        <label>Price: </label>
        <Slider
          value={[filter.price.min, filter.price.max]}
          range
          marks={{
            0: "$0",
            25: "$25",
            50: "$50",
            75: "$70",
            100: "$100",
          }}
          step={25}
          tooltipVisible={false}
          tooltipPlacement={"top"}
          tipFormatter={(value) => <span>${value}</span>}
          onChange={onChangePriceRange}
        />
      </div>
      <Button onClick={onSearch} type="primary">
        Search
      </Button>
    </div>
  );
};

export default FilterBox;

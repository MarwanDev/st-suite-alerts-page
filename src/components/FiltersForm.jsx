import React from "react";
import IconMenu from "./IconMenu";

const FiltersForm = () => {
  const options = [
    {
      title: "Health Care",
      value: "Health Care",
    },
    {
      title: "Health Care",
      value: "Health Care",
    },
  ];

  const marketOptions = [
    {
      title: "Cap 1",
      value: "Cap 1",
    },
    {
      title: "Cap 2",
      value: "Cap 2",
    },
  ];

  const riskOptions = [
    {
      title: "Low Risk",
      value: "Low Risk",
    },
    {
      title: "Mid Risk",
      value: "Mid Risk",
    },
    {
      title: "High Risk",
      value: "High Risk",
    },
    {
      title: "Option Text Here",
      value: "Option Text Here",
    },
  ];
  return (
    <form className="form">
      <div className="form-container">
        <div className="form-header">Filters</div>
        <div className="filter-title">Industry</div>
        <IconMenu options={options} />
        <div className="filter-footer">Choose something.</div>
        <div className="filter-title">Market Cap</div>
        <IconMenu options={marketOptions} />
        <div className="filter-footer">Press Apply to see changes.</div>
        <div className="filter-title">Risk</div>
        <IconMenu options={riskOptions} />
        <button type="submit" className="div-57">Apply Filters</button>
      </div>
    </form>
  );
};

export default FiltersForm;

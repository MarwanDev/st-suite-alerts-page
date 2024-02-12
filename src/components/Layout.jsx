import React from "react";
import "./Layout.css";
import FiltersForm from "./FiltersForm";
import TransactionsList from "./TransactionsList";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-container">
        <FiltersForm />
        <TransactionsList />
      </div>
    </div>
  );
};

export default Layout;

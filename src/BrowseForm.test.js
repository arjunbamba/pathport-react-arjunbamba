import React from "react";
import { getAllByRole, getAllByText, render, fireEvent, getByDisplayValue } from "@testing-library/react";
import BrowseForm from "./BrowseForm";

  function handleBrowseSubmit(formData) {
    return 1;
  }

test("rendering Outdoor Radio in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Outdoors')).toBeInTheDocument(); 
});

test("rendering Art & Culture Radio in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Art & Culture')).toBeInTheDocument(); 
});

test("rendering Music Radio in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Music')).toBeInTheDocument(); 
});

test("rendering Submit Button in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Browse')).toBeInTheDocument(); 
});

test("rendering Reset Button in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Reset')).toBeInTheDocument(); 
});
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
  const {getByRole} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('OutdoorRadio')).toBeTruthy(); 
});

test("rendering Art Radio in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('ArtRadio')).toBeTruthy(); 
});

test("rendering Music Radio in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('MusicRadio')).toBeTruthy(); 
});

test("rendering Submit Button in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('submit')).toBeTruthy(); 
});

test("rendering Reset Button in the Browse Form", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <BrowseForm onSubmit={handleBrowseSubmit} /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('reset')).toBeTruthy(); 
});
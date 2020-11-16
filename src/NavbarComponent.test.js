// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { getAllByRole, getAllByText, render, fireEvent, getByDisplayValue } from "@testing-library/react";
import NavBarComponent from "./NavBarComponent";

test("rendering PATHPORT in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('PATHPORT')).toBeInTheDocument(); 
});

test("rendering Home in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Home')).toBeInTheDocument();  
});

test("rendering Welcome in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Welcome')).toBeInTheDocument(); 
});

test("rendering About Us in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('About Us')).toBeInTheDocument(); 
});

test("rendering Our Start in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Our Start')).toBeInTheDocument(); 
});

test("rendering Learn More in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Learn More')).toBeInTheDocument(); 
});

test("rendering Explore in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Explore')).toBeInTheDocument(); 
});

test("rendering Adventure at Heart in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByText} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByText('Adventure at Heart')).toBeInTheDocument(); 
});

test("rendering Browse in the navigation bar", () => {
    // Arrange, Act, Assert (AAA)
    // Arrange: Setting up necessary variables
  
    // Act: Thing we are testing
    const {getByText} = render(
      <NavBarComponent />
    );    
  
    // Assert: checking if meeting expectation - also called expectation sometimes
    expect(getByText('Browse')).toBeInTheDocument(); 
  });

  test("rendering Create Recommendation in the navigation bar", () => {
    // Arrange, Act, Assert (AAA)
    // Arrange: Setting up necessary variables
  
    // Act: Thing we are testing
    const {getByText} = render(
      <NavBarComponent />
    );    
  
    // Assert: checking if meeting expectation - also called expectation sometimes
    expect(getByText('Create Recommendation')).toBeInTheDocument(); 
  });






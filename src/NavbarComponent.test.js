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

test("rendering Title Link in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent /> 
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('TitleLink')).toBeTruthy(); 
});

test("rendering Home Link in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('HomeLink')).toBeTruthy(); 
});

test("rendering Welcome Tab in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('WelcomeTab')).toBeTruthy(); 
});

test("rendering Our Start Tab in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('AboutUsTab')).toBeTruthy(); 
});

test("rendering Learn More Link in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('AboutUsLink')).toBeTruthy(); 
});

test("rendering Adventure Tab in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('AdventureTab')).toBeTruthy(); 
});

test("rendering Browse Link in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('BrowseLink')).toBeTruthy(); 
});

test("rendering Create Link in the navigation bar", () => {
  // Arrange, Act, Assert (AAA)
  // Arrange: Setting up necessary variables

  // Act: Thing we are testing
  const {getByRole} = render(
    <NavBarComponent />
  );    

  // Assert: checking if meeting expectation - also called expectation sometimes
  expect(getByRole('CreateLink')).toBeTruthy(); 
});






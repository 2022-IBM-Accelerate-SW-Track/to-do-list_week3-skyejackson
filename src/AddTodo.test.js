import { lightBlue } from '@mui/material/colors';
import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/27/2022";
  fireEvent.change(inputTask, {target: { value: "Week 3 Test"}})
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  fireEvent.change(inputTask, {target: { value: "Week 3 Test"}})
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const check = screen.getByText(/Week 3 Test/i)
  //const checkDate = screen.getByText(new RegExp(dueDate, "i"));
  expect(check).toBeInTheDocument();
  //expect(checkDate).toBeInTheDocument();
  });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/27/2022";
  fireEvent.change(inputTask, {target: { value: null}})
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/27/2022";
  fireEvent.change(inputTask, {target: { value: "Check Date"}})
  fireEvent.change(inputDate, { target: { value: null}});
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/27/2022";
  fireEvent.change(inputTask, {target: { value: "Week 3 Test"}})
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const check = screen.getByText(/Week 3 Test/i)
  //const checkDate = screen.getByText(new RegExp(dueDate, "i"));
  expect(check).toBeInTheDocument();
  //expect(checkDate).toBeInTheDocument();
  const deleteButton = screen.getByRole('checkbox');
  fireEvent.click(deleteButton);
  const check2 = screen.getByText(/You have no todo's left/i)
  expect(check2).toBeInTheDocument();
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/27/2022";
  const dueDate2 = "06/27/2023";
  fireEvent.change(inputTask, {target: { value: "Week 3 Test 1"}})
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  fireEvent.change(inputTask, {target: { value: "Week 3 Test 2"}})
  fireEvent.change(inputDate, { target: { value: dueDate2}});
  fireEvent.click(element);
  const check = screen.getByText(/Week 3 Test 1/i)
  //const checkDate = screen.getByText(new RegExp(dueDate, "i"));
  const check2 = screen.getByText(/Week 3 Test 2/i)
  //const checkDate2 = screen.getByText(new RegExp(dueDate2, "i"));
  expect(check).toBeInTheDocument();
  //expect(checkDate).toBeInTheDocument();
  expect(check2).toBeInTheDocument();
  //expect(checkDate2).toBeInTheDocument();
  const checkColor = screen.getByTestId(/Week 3 Test 1/i).style.background
  const checkColor2 = screen.getByTestId(/Week 3 Test 2/i).style.background
  expect(checkColor).toBe(lightBlue)
  expect(checkColor2).toBe(red)
 });

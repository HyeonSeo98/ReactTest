import { render, screen } from '@testing-library/react';
import App from './App';

test("count",() => {
  render(<App/>)
  const counterElement = screen.getByTestId("counter")
  expect(counterElement).toHaveTextContent(0)
  // counter요소가 0과 일치하는지 판단
})

test("plus",() => {
  render(<App/>)
  const plusBtn = screen.getByTestId("plus")
  expect(plusBtn).toHaveTextContent("+")
})

test("minus",() => {
  render(<App/>)
  const minusBtn = screen.getByTestId("minus")
  expect(minusBtn).toHaveTextContent("-")
})
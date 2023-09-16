const ShipClass = require("./index");

test("create a ship object", () => {
  const newShip = new ShipClass(4, 0);
  expect(typeof newShip).toBe("object");
});

test("The ship object contains the needed properties", () => {
  const newShip = new ShipClass(4, 0);
  expect(newShip).toHaveProperty("length");
  expect(newShip).toHaveProperty("hits");
  expect(newShip).toHaveProperty("isSunk");
});

test("The ship get number of hits method works properly", () => {
  const newShip = new ShipClass(4, 1);
  expect(newShip.numberOfHits).toBe(1);
});

test("The ship set number of hits method works properly", () => {
  const newShip = new ShipClass(4, 1);
  newShip.hitIncrease = 3;
  expect(newShip.hits).toBe(4);
});

test.only("The ship sinkStatus method works properly", () => {
  const newShip = new ShipClass(2, 2);
  const newShip2 = new ShipClass(2, 0);
  newShip.sinkUpdate();
  newShip2.sinkUpdate();
  expect(newShip.isSunk).toBe(true);
  expect(newShip2.isSunk).toBe(false);
});

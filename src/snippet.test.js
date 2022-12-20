import func from "./snippet";

beforeAll(function () {});

test("to localhost app", () => {
  expect(
    func("http://app.staging.spacefill.fr/logistic-management/", "localhost")
  ).toBe("http://localhost:1239/logistic-management/");
});

test("to localhost admin", () => {
  expect(
    func(
      "http://admin.app.staging.spacefill.fr/logistic-management/",
      "localhost"
    )
  ).toBe("http://localhost:1240/logistic-management/");
});

test("to staging app", () => {
  expect(func("http://localhost:1239/logistic-management/", "staging")).toBe(
    "http://app.staging.spacefill.fr/logistic-management/"
  );
});

test("to staging admin", () => {
  expect(func("http://localhost:1240/logistic-management/", "staging")).toBe(
    "http://admin.app.staging.spacefill.fr/logistic-management/"
  );
});

test("fail", () => {
  expect(func("http://example.com/logistic-management/", "localhost")).toBe(
    null
  );
});

test("instance not provided", () => {
  expect(func("http://localhost:1240/logistic-management/", "")).toBe(null);
});

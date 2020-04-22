export default {
  get: jest.fn(() => Promise.resolve({ data: "mocked" })),
  post: jest.fn(() => Promise.resolve({ data: "mocked" }))
};
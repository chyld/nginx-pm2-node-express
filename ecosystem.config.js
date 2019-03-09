module.exports = {
  apps: [
    {
      name: "e1",
      script: "main.js",
      env: {
        PORT: 3001
      }
    },
    {
      name: "e2",
      script: "main.js",
      env: {
        PORT: 3002
      }
    },
    {
      name: "e3",
      script: "main.js",
      env: {
        PORT: 3003
      }
    }
  ]
};

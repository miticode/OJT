const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(middlewares);

// Định nghĩa corsOptions ở đây
const corsOptions = {
  origin: "http://localhost:3000", // Thay đổi lại origin của ứng dụng React của bạn
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

server.use(cors(corsOptions));
server.use("/api", router); // Định tuyến cho các request API

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

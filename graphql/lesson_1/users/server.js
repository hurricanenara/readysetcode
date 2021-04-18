import express from "express";
import expressGraphQL from "express-graphql";

const app = express();

const PORT = 4000;

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

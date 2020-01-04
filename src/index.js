import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import { Provider, Client, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/graphql-graphcache";

const cache = cacheExchange({});

const client = new Client({
  url: "http://localhost:4000",
  exchanges: [dedupExchange, cache, fetchExchange]
});

render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);

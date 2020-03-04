import React from "react";
import { storiesOf } from "@storybook/react";
import ShowGoodJob from "../components/GoodJob";

storiesOf("GoodJob", module).add("default view", () => {
  return <ShowGoodJob />;
});

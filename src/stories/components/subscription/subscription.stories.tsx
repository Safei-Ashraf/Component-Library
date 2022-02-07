import React from "react";

// story within a story

import { PrimaryA } from "../Button/Button.stories";

import { Large } from "../Input/Input.stories";

export default {
  title: "form/subscription",
};

export const PrimarySubscription = () => {
  return (
    <>
      <Large size="medium" placeHolder="medium" />
      <PrimaryA varient="primary" children="Button" />
    </>
  );
};

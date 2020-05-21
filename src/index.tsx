import * as React from "react";
import * as ReactDOM from "react-dom";

import { Profile } from "./components/Profile";

const profile = <Profile />
ReactDOM.render(
    profile,
    document.getElementById("root")
);
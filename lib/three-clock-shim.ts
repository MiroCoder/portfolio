import { setConsoleFunction } from "three";

let configured = false;

if (!configured) {
  setConsoleFunction((type, message, ...params) => {
    if (
      type === "warn" &&
      message.includes("Clock") &&
      message.includes("deprecated")
    ) {
      return;
    }

    if (type === "warn") {
      console.warn(message, ...params);
    } else if (type === "log") {
      console.log(message, ...params);
    } else if (type === "error") {
      console.error(message, ...params);
    }
  });

  configured = true;
}

export {};

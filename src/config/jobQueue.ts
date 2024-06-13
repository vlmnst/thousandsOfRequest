import Queue from "bull";
import fs from "fs";

export const myQueue = new Queue("queue", {
  redis: {
    port: 6379,
    host: "127.0.0.1",
  },
});

myQueue.process(async ({ data }, done) => {
  try {
    setTimeout(() => {
      const jsonString = JSON.stringify(data);
      const writeStream = fs.createWriteStream("src/Database/output.txt", {
        flags: "a",
      });
      writeStream.write(jsonString + "\n");
      writeStream.end();
      done();
    }, 6000);
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
});

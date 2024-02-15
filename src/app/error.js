"use client";

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <h2>Uh oh! 🤖 Looks like you need to be logged in to do that!</h2>
        <p clssname="ml-2">{error.message}</p>
      </body>
    </html>
  );
}

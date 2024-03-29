import { useEffect, useState } from "react";

export default function ShowRep() {
  useEffect(() => {
    getData();
  }, []);
  const [data, setdata] = useState([""]);
  const getData = async () => {
    try {
      const response = await fetch("/fetdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.error);
      }
      setdata(data.reply);
    } catch (error) {}
  };
  return (
    <section>
      {data.map((rep, i) => {
        return (
          <div key={i}>
            <div>message:-{rep.message}</div>
            <div>answer:-{rep.answer}</div>
          </div>
        );
      })}
    </section>
  );
}

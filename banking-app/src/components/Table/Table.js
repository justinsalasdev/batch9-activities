import genClass from "../../helpers/style/genClass";

export default function Table({ data }) {
  const $ = genClass({ block: "table" });

  return (
    <table {...$("table")}>
      <thead>
        <tr {...$("row")}>
          <th {...$("title")}>Name</th>
          <th {...$("title")}>Cost</th>
          <th {...$("title")}>Due</th>
        </tr>
      </thead>
      <tbody>
        {dues.map((due, i) => {
          return (
            <tr {...$("row")} key={i}>
              <td {...$("data")}>{due.name}</td>
              <td {...$("data")}>{due.amount}</td>
              <td {...$("data")}>{due.due}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

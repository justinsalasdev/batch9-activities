import getDeadline from "../../helpers/getDeadline";
import genClass from "../../helpers/style/genClass";

export default function Table({ dues, handleDelete, isDeleting }) {
  const $ = genClass({ block: "table" });

  return (
    <table {...$()}>
      <thead>
        <tr {...$("row")}>
          <th {...$("title")}>Name</th>
          <th {...$("title")}>Cost</th>
          <th {...$("title")}>Due</th>
          <th {...$("title")}>Reps</th>
        </tr>
      </thead>
      <tbody>
        {dues.map(due => {
          return (
            <tr {...$("row")} key={due.id}>
              <td {...$("data")}>{due.description}</td>
              <td {...$("data")}>{due.amount}</td>
              <td {...$("data")}>{getDeadline(due.date, due.frequency)}</td>
              <td {...$("data")}>{due.frequency}</td>
              {/* <button onClick={handleDelete(due.id)}></button> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

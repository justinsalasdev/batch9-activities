import getDeadline from "../../helpers/getDeadline";
import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import { motion } from "framer-motion";
import { deleteVars, tableVars } from "./variants";

export default function Table({ dues, handleDelete, isDeleting }) {
  const $ = genClass({ block: "table" });

  return (
    <motion.table
      {...$()}
      variants={tableVars}
      animate="shown"
      initial="hidden"
    >
      <thead>
        <tr {...$("head")}>
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
              <motion.td
                {...$("delete")}
                variants={deleteVars}
                onClick={handleDelete(due.id)}
                animate={isDeleting ? "active" : "inactive"}
              >
                <Icon type="delete" />
              </motion.td>
            </tr>
          );
        })}
      </tbody>
    </motion.table>
  );
}

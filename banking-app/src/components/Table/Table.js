import getDeadline from "../../helpers/getDeadline";
import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import { motion } from "framer-motion";
import { deleteVars, tableVars } from "./variants";

export default function Table({ heads, data, handleDelete, isDeleting }) {
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
          {heads.map(head => (
            <th {...$("title")} key={head}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr {...$("row")} key={item.id}>
              <td {...$("data")}>{item.description}</td>
              <td {...$("data")}>{item.amount}</td>
              <td {...$("data")}>{getDeadline(item.date, item.frequency)}</td>
              <td {...$("data")}>{item.frequency}</td>
              <motion.td
                {...$("delete")}
                variants={deleteVars}
                onClick={handleDelete(item.id)}
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

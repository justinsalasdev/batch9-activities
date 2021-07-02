import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import Saver from "../Saver/Saver";
import { motion } from "framer-motion";
import { addVars, spenderVars } from "./variants";
import useBudget from "./useBudget";
import Loader from "../Loader/Loader";
import Table from "../Table/Table";

export default function Salary() {
  const {
    isStarted,
    toggleForm,
    isLoading,
    error,
    budget,
    handleDelete,
    isDeleting
  } = useBudget("Income");

  const $ = genClass({ block: "budget" });
  return (
    <div {...$()}>
      <div {...$("bar")}>
        <motion.button
          {...$("add")}
          onClick={toggleForm}
          variants={addVars}
          initial="inactive"
          animate={isStarted ? "active" : "inactive"}
        >
          <Icon type="plus" ps={$("icon").className} />
        </motion.button>
        <span {...$("title")}>INCOME</span>
        <motion.div
          {...$("spender")}
          variants={spenderVars}
          animate={isStarted ? "shown" : "hidden"}
        >
          {isStarted && <Saver mods={{ form: ["saver"], action: ["saver"] }} />}
        </motion.div>
      </div>

      <div {...$("view")}>
        <>
          {error && <span>{error}</span>}
          {(isLoading && <Loader />) || (
            <Table
              heads={["name", "₿₿₿", "next", "reps"]}
              data={budget}
              handleDelete={handleDelete}
              isDeleting={isDeleting}
            />
          )}
        </>
      </div>
    </div>
  );
}

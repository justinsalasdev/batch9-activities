import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import Spender from "../Spender/Spender";
import { motion } from "framer-motion";
import { addVars, blockVars, spenderVars } from "./variants";
// import useDues from "./useDues";
import Loader from "../Loader/Loader";
import Table from "../Table/Table";
import useBudget from "../../hooks/useBudget";

//Dues props
/*


 */

export default function Dues() {
  const {
    isStarted,
    toggleForm,
    isLoading,
    error,
    budget,
    handleDelete,
    isDeleting
  } = useBudget("Dues");

  const $ = genClass({ block: "budget" });
  return (
    <motion.div {...$()} variants={blockVars} animate="shown" initial="hidden">
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
        <span {...$("title")}>DUES</span>
        <motion.div
          {...$("spender")}
          variants={spenderVars}
          animate={isStarted ? "shown" : "hidden"}
        >
          {isStarted && (
            <Spender mods={{ form: ["spender"], action: ["spender"] }} />
          )}
        </motion.div>
      </div>

      <div {...$("view")}>
        <>
          {error && <span>{error}</span>}
          {(isLoading && <Loader />) || (
            <Table
              heads={["name", "₿₿₿", "due", "reps"]}
              data={budget}
              handleDelete={handleDelete}
              isDeleting={isDeleting}
            />
          )}
        </>
      </div>
    </motion.div>
  );
}

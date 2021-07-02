import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import Spender from "../Spender/Spender";
import { motion } from "framer-motion";
import { addVars, spenderVars } from "./variants";
import useDues from "./useDues";
import Loader from "../Loader/Loader";
import Table from "../Table/Table";

export default function Dues() {
  const { isStarted, toggleForm, isLoading, error, budget } = useDues();
  console.log(budget, isLoading);

  const $ = genClass({ block: "dues" });
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
        {(isLoading && <Loader />) || <Table dues={budget} />}
      </div>
    </div>
  );
}

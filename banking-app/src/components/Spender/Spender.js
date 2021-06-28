import genClass from "../../helpers/style/genClass";

export default function Spender({ mods, ps }) {
  const $ = genClass({ block: "form", mods, ps });
  return <form {...$()}>Spender</form>;
}

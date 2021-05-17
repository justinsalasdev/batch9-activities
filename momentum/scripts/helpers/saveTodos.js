export default function (toDos) {
  localStorage.setItem("toDosObject", JSON.stringify({ toDos }));
}

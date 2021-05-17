export default function () {
  return JSON.parse(localStorage.getItem("toDosObject"))?.toDos || [];
}

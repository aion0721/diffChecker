import "./styles.css";
import ListTable from "./ListTable";
import UploadForm from "./UploadForm";
import DiffCheck from "./DiffCheck";

export default function App() {
  const test1 = ["a", "b", "c", "f"];
  const test2 = ["b", "c", "d", "e"];

  const sample = {
    type: "Serv",
    data: [
      {
        username: "root",
        hostname: "testhost",
      },
      {
        username: "rp",
        hostname: "testhost2",
      },
    ],
  };

  const { data } = sample;

  console.log(data);

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <ListTable test1={test1} test2={test2} />
      <UploadForm />
      <DiffCheck />
    </>
  );
}

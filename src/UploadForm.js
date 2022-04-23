import react, { useState } from "react";
import UploadFrame from "./UploadFrame";

function UploadForm() {
  const [TA, setTA] = useState({
    serv: {
      tirmap1f: ["root", "login00"],
      tirmap2f: ["aaa", "bbb"],
    },
    ssch: {},
    solid: {},
    ams: {},
  });
  const IRM = {
    serv: {
      tirmap1f_os: ["root", "login00"],
      tirmap2f_os: ["root", "login00"],
    },
  };

  const getText = (e) => {
    var reader = new FileReader();
    reader.onload = function (ev) {
      //console.log(e.name);
      //console.log(reader.result);
      const ret = reader.result.split("\r\n");
      setTA({
        ...TA,
        serv: {
          ...TA.serv,
          [e.name]: ret,
        },
      });
    };
    reader.readAsText(e);
  };

  const getContents = (e) => {
    e.preventDefault();
    var file = e.target.form[0].files;

    console.log(file.length);
    for (var i = 0; i < file.length; i++) {
      getText(file[i]);
    }
  };

  //reader.readAsText(files[0]);
  //console.log(reader.readAsText(files[0]));
  //console.log(reader.result);
  //console.log(files[0]);
  return (
    <div>
      <form name="ssch">
        <input type="file" id="ssch" multiple />
        <br />
        <button
          onClick={(e) => {
            getContents(e);
          }}
        >
          Button
        </button>
        <textarea name="contents" rows="10" cols="40"></textarea>
      </form>

      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          //console.log(Object.keys(TA).map((key) => key));
          console.log(TA);
        }}
      >
        showTA
      </button>
      {Object.keys(TA).map((key) => (
        <UploadFrame category={key} TA={TA} setTA={setTA} />
      ))}
    </div>
  );
}

export default UploadForm;

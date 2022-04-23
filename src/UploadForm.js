import react from "react";
import { render } from "react-dom/cjs/react-dom.production.min";

function UploadForm() {
  const IRM = {
    serv: {
      tirmap1f_os: ["root", "login00"],
      tirmap2f_os: ["root", "login00"],
    },
  };
  var TA = {
    serv: {},
    ssch: {},
    solid: {},
    ams: {},
  };
  console.log(IRM);
  const getText = (e) => {
    var reader = new FileReader();
    reader.onload = function (ev) {
      console.log(TA);
      //console.log(e.name);
      //console.log(reader.result);
      const ret = reader.result.split("\r\n");
      TA = {
        ...TA,
        serv: {
          ...TA.serv,
          [e.name]: ret,
        },
      };
      console.log(TA);
    };
    reader.readAsText(e);
  };

  const getContents = (e) => {
    e.preventDefault();
    var file = e.target.form[0].files;

    console.log(file.length);
    for (var i = 0; i < file.length; i++) {
      getText(file[i]);
      document.ssch.contents.value = JSON.stringify(TA);
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

      <button
        onClick={(e) => {
          e.preventDefault();
          document.ssch.contents.value = JSON.stringify(TA);
          console.log(Object.keys(TA).map((key) => key));
        }}
      >
        showTA
      </button>
    </div>
  );
}

export default UploadForm;

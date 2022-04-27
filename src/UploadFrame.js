import react, { useState } from "react";

function UploadFrame(props) {
  var [tmpArray, setTmpArray] = useState({});
  const cate = props.category;
  var TA = props.TA;
  const getText = (e) => {
    var reader = new FileReader();
    reader.onload = function (ev) {
      //console.log(e.name);
      //console.log(reader.result);
      const ret = reader.result.split("\r\n");
      //console.log(TA[cate]);
      setTmpArray((beforeValue) => ({ ...beforeValue, [e.name]: ret }));
      //props.setTA({
      //  ...TA,
      //  [cate]: {
      //    ...TA[cate],
      //    [e.name]: ret,
      //  },
      //});
      //console.log(TA);
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
    console.log(tmpArray);
    props.setTA({
      ...TA,
      [cate]: {
        ...TA[cate],
        tmpArray,
      },
    });
  };

  return (
    <form name={cate}>
      <h1>{cate}</h1>
      <input type="file" id={cate} multiple></input>
      <button
        onClick={(e) => {
          getContents(e);
        }}
      >
        Button
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(tmpArray);
        }}
      >
        test
      </button>
    </form>
  );
}

export default UploadFrame;

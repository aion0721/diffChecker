import react from "react";

function UploadForm() {
  const getText = (e) => {
    var reader = new FileReader();
    reader.onload = function (ev) {
      console.log(reader.result);
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
      <form name="uploadForm">
        <input type="file" id="serv" multiple />
        <br />
        <textarea name="contents" rows="10" cols="40"></textarea>
        <button
          onClick={(e) => {
            getContents(e);
          }}
        >
          Button
        </button>
      </form>
    </div>
  );
}

export default UploadForm;

import react from "react";

function DiffCheck() {
  const SID = {
    serv: {
      tirmap1f_os: ["root", "login00"],
      tirmap2f_os: ["root", "login00", "login02"],
      tirmdb1f_os: ["root", "login00"],
    },
    ssch: {
      tirmap1f_os: ["login00", "login10"],
      tirmdb1f_os: ["root", "login00", "login01"],
      tirmdb2f_os: ["root", "login00", "login01", "login03"],
    },
    solid: {
      tirmap1f_os: ["login00"],
    },
    ams: {
      tirmdb1f_os: ["root"],
    },
  };
  const { serv, ssch, solid, ams } = SID;
  var TMPSID = {};

  const EXIST = "●";
  const NOTEXIST = "×";

  //const merged = Array.from(new Set(serv.concat(ssch)));
  const mergedArray = { ...serv, ...ssch };
  const servKeys = Object.keys(serv);
  // servKeys = {'tirmap1f_os', 'tirmap2f_os'}
  const sschKeys = Object.keys(ssch);
  // sschKeys = {'tirmap1f_os', 'tirmap2f_os'}

  const uniqueKey = Array.from(new Set(servKeys.concat(sschKeys)));

  function getUniqueHost(hostname) {
    if (
      typeof serv[hostname] === "object" &&
      typeof ssch[hostname] === "object"
    ) {
      return Array.from(new Set(serv[hostname].concat(ssch[hostname])));
    } else if (
      typeof serv[hostname] === "object" &&
      typeof ssch[hostname] === "undefined"
    ) {
      return serv[hostname];
    } else {
      //typeof serv[hostname] === 'undefined' && typeof ssch[hostname] === 'object')}{
      return ssch[hostname];
    }
  }

  //console.log(uniqueKey);
  uniqueKey.map((e) => {
    const uniqueHost = getUniqueHost(e);
    //console.log(uniqueHost);

    //console.log(e);
    //console.log(ssch[e].concat(serv[e]));
    TMPSID = {
      ...TMPSID,
      [e]: uniqueHost,
    };
  });

  //console.log(TMPSID);

  function checkArray(target, keyword) {
    if (typeof target === "undefined") {
      return NOTEXIST;
    } else {
      return target.includes(keyword) ? EXIST : NOTEXIST;
    }
  }

  //JSON.stringify(SID)
  return (
    <table>
      <thead>
        <tr>
          <td>hostname</td>
          <td>username</td>
          <td>serv</td>
          <td>ssch</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(TMPSID).map((e) =>
          TMPSID[e].map((x) => (
            <tr>
              <td>{e}</td>
              <td>{x}</td>
              <td>{checkArray(serv[e], x)}</td>
              <td>{checkArray(ssch[e], x)}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default DiffCheck;

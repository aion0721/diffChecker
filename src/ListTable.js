const ListTable = ({ test1, test2 }) => {
  const test3 = Array.from(new Set(test1.concat(test2)));
  const reslut = [
    { id: 1, name: "root", serv: true, solid: false },
    { id: 2, name: "login00", serv: true, solid: true },
    { id: 3, name: "login01", serv: false, solid: true },
  ];
  const diffCheck = (e) => {
    return (
      <>
        <th>{e}</th>
        <th>{test1.includes(e) ? "true" : "false"}</th>;
        <th>{test2.includes(e) ? "true" : "false"}</th>;
      </>
    );
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>test1</th>
          <th>test2</th>
        </tr>
        {test3.map((val) => (
          <tr key={val}>{diffCheck(val)}</tr>
        ))}
        {reslut.map((e) => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.serv ? "●" : "×"}</td>
            <td>{e.solid ? "●" : "×"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  // {test3.map((val) => (
  //  <div key={val}>
  //    <h3>{diffCheck(val)}</h3>
  //  </div>
  //))};
};
export default ListTable;

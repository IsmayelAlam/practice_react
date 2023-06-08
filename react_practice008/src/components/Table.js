function Table({ data, config, keyFN }) {
  const renderHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderRows = data.map((rowData) => {
    return (
      <tr key={rowData.name} className="border-b">
        {config.map((row) => {
          return (
            <td className="px-5" key={keyFN(row)}>
              {row.render(rowData)}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table className="table-fixed border-spacing-2 ">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
}

export default Table;

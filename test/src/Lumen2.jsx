import React, { useState,useEffect} from 'react'
import axios from "axios";

export default function Lumen2() {
    const [table, setTable] = useState({});
    // axios.get(
    //     `http://127.0.0.1:5000/test`
    // )
    // .then((response) => {
    //     const res = response.data;
    //     console.log(res)
    // });



   function fetchData() {
      axios.get(
      `http://127.0.0.1:5000/print_table`
      )
      .then((response) => {
          const res = response.data;
          setTable(res)
          console.log(res)
      });
    }

    useEffect(() => {
      fetchData();
  }, []);
    


  return (
    <>
    <div>Lumen2</div>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Data Table</h1>
      <table className="table-auto border-collapse border border-gray-200 w-full">
        <thead>
          <tr className="bg-yellow-600">
            <th className="border border-gray-300 px-4 py-2">S.No</th>
            <th className="border border-gray-300 px-4 py-2">Test Data</th>
            <th className="border border-gray-300 px-4 py-2">Output</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(table).map(([sno, entries]) =>
            entries.map((entry, index) => (
              <tr key={`${sno}-${index}`} className="hover:bg-gray-600">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {sno}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.testdata}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.output}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.date}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </>
  )
}

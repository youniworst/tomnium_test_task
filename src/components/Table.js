import jsonData from "../JSON/data.json";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const TableComponent = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(jsonData);
      }, 2000);
    }).then((result) => {
      setData(result.rates);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Box
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          style={{
            maxWidth: "500px",
            margin: "auto",
          }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{
                    color: 'white',
                    backgroundColor: "gray",
                    width: "50%",
                  }}
                >
                  Сurrency
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: 'white',
                    backgroundColor: "gray",
                    width: "50%",
                  }}
                >
                  Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(data).map(([currency, value]) => {
                return (
                  <TableRow key={currency}>
                    <TableCell scope="row" align="center">
                      {currency}
                    </TableCell>
                    <TableCell align="center">{value}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const data = [
    {
        name: 'Bitcoin',
        price: '17, 850 $',
        change: '+1,20 %',
        volume: '1, 342, 234 $',
        cap: '123,342,123 $'
    },
    {
        name: 'Ethereum',
        price: '1, 320 $',
        change: '+1,80 %',
        volume: '842, 234 $',
        cap: '100,342,123 $'
    },
    {
        name: 'Litecoin',
        price: '850 $',
        change: '-1,10 %',
        volume: '342, 234 $',
        cap: '22,342,123 $'
    },
    {
        name: 'XRP',
        price: '232 $',
        change: '+5,01 %',
        volume: '42, 234 $',
        cap: '1,312,163 $'
    },
    {
        name: 'Solana',
        price: '101 $',
        change: '+3,43 %',
        volume: '821, 204 $',
        cap: '3,342,123 $'
    },
    {
        name: 'Avalanche',
        price: '90 $',
        change: '-7,22 %',
        volume: '42, 234 $',
        cap: '10,312,143 $'
    },
    {
        name: 'Algorand',
        price: '0.223 $',
        change: '+6,78 %',
        volume: '11, 534 $',
        cap: '8,312,523 $'
    },
];

export const DataTable = () => {
    return (
            <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Crypto</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">24h change</TableCell>
                        <TableCell align="right">24h Volume</TableCell>
                        <TableCell align="right">Market cap</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.change}</TableCell>
                            <TableCell align="right">{row.volume}</TableCell>
                            <TableCell align="right">{row.cap}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    );
}
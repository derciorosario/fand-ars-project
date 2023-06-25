const express = require('express');
const app = express();
const fs = require('fs');
const xlsx = require('xlsx');
const download = require('download');

const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.aoa_to_sheet([
  ['Name', 'Age','5345'],
  ['John', 25,'yuutyu'],
  ['Jane', 30,'tertert'],
]);


  
app.get('/download-xlsx', (req, res) => {

    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const filePath = `xlsx/`;
    const fileName = `ars-tabela-de-lancamento-${new Date().getFullYear() + "-" + new Date().getDay() + "-" + new Date().getMonth() +"-"+new Date().getHours()+"_"+new Date().getMinutes()+"_"+new Date().getSeconds()}.xlsx`
    xlsx.writeFile(workbook, filePath + fileName);
         
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
            res.status(404).send('File not found');
               return;
            }
        
            res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(fileName)}`);
            res.setHeader('Content-Type', 'application/octet-stream');
        
           
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
        });
      

     
});
  




const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



class Data {
    constructor() {
        this.stt = 0;
        this.mssv = '';
        this.cccd = '';
        this.hovaten = '';
        this.ngaysinh = '';
        this.nganh = '';
        this.gioitinh = '';
        this.diachi = '';
    }
}

function createData(n){
    let dataTable = [];
    for (let i = 1; i < n + 1 ; i++) {
        let t = new Data(); 
        t.stt = i;
        t.mssv = 'mssv' + i;
        t.cccd = '123' + i;
        t.hovaten = 'Tran Van A' + i;
        t.ngaysinh = '02-02-2004';
        t.nganh = i % 2 === 0 ? 'CNTT' : i % 3 === 0 ? 'KHMT' : 'KTPM';
        t.gioitinh = 'Nam';
        t.diachi = 'An Hoa, Ninh Kieu, Can Tho';
    
        dataTable.push(t);
    }
    return dataTable
}


function addRowsToTable(dataArray) {
    let table = document.querySelector('table')
    let tbody = table.querySelector('tbody')
    tbody.innerHTML = '';

    dataArray.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.stt}</td>
            <td>${data.mssv}</td>
            <td>${data.cccd}</td>
            <td>${data.hovaten}</td>
            <td>${data.ngaysinh}</td>
            <td>${data.nganh}</td>
            <td>${data.gioitinh}</td>
            <td>${data.diachi}</td>
        `;
        tbody.appendChild(row);
    });
}

let data = createData(10)


console.log(data);


// dữ liệu đã tạo dùng để test thử chức năng tìm kiếm

// [
//     {
//         "stt": 1,
//         "mssv": "mssv1",
//         "cccd": "1231",
//         "hovaten": "Tran Van A1",
//         "ngaysinh": "02-02-2004",
//         "nganh": "KTPM",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 2,
//         "mssv": "mssv2",
//         "cccd": "1232",
//         "hovaten": "Tran Van A2",
//         "ngaysinh": "02-02-2004",
//         "nganh": "CNTT",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 3,
//         "mssv": "mssv3",
//         "cccd": "1233",
//         "hovaten": "Tran Van A3",
//         "ngaysinh": "02-02-2004",
//         "nganh": "KHMT",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 4,
//         "mssv": "mssv4",
//         "cccd": "1234",
//         "hovaten": "Tran Van A4",
//         "ngaysinh": "02-02-2004",
//         "nganh": "CNTT",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 5,
//         "mssv": "mssv5",
//         "cccd": "1235",
//         "hovaten": "Tran Van A5",
//         "ngaysinh": "02-02-2004",
//         "nganh": "KTPM",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 6,
//         "mssv": "mssv6",
//         "cccd": "1236",
//         "hovaten": "Tran Van A6",
//         "ngaysinh": "02-02-2004",
//         "nganh": "CNTT",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 7,
//         "mssv": "mssv7",
//         "cccd": "1237",
//         "hovaten": "Tran Van A7",
//         "ngaysinh": "02-02-2004",
//         "nganh": "KTPM",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 8,
//         "mssv": "mssv8",
//         "cccd": "1238",
//         "hovaten": "Tran Van A8",
//         "ngaysinh": "02-02-2004",
//         "nganh": "CNTT",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 9,
//         "mssv": "mssv9",
//         "cccd": "1239",
//         "hovaten": "Tran Van A9",
//         "ngaysinh": "02-02-2004",
//         "nganh": "KHMT",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     },
//     {
//         "stt": 10,
//         "mssv": "mssv10",
//         "cccd": "12310",
//         "hovaten": "Tran Van A10",
//         "ngaysinh": "02-02-2004",
//         "nganh": "CNTT",
//         "gioitinh": "Nam",
//         "diachi": "An Hoa, Ninh Kieu, Can Tho"
//     }
// ]







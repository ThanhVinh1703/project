let databaseCourse =[
    {
        stt:1,
        maKhoaHoc:"RA01",
        tenKhoahoc:"Khóa học 1",
        thoiGian:"1000",
        trangThai:true,
    },
    {
        stt:2,
        maKhoaHoc:"RA02",
        tenKhoahoc:"Khóa học 2",
        thoiGian:"2000",
        trangThai:false,
    },
    {
        stt:3,
        maKhoaHoc:"RA03",
        tenKhoahoc:"Khóa học 3",
        thoiGian:"1500",
        trangThai:true,
    },
    {
        stt:4,
        maKhoaHoc:"RA04",
        tenKhoahoc:"Khóa học 4",
        thoiGian:"1000",
        trangThai:true,
    },
    {
        stt:5,
        maKhoaHoc:"RA05",
        tenKhoahoc:"Khóa học 5",
        thoiGian:"1000",
        trangThai:true,
    },
    {
        stt:6,
        maKhoaHoc:"RA06",
        tenKhoahoc:"Khóa học 6",
        thoiGian:"1000",
        trangThai:true,
    },
    {
        stt:7,
        maKhoaHoc:"RA07",
        tenKhoahoc:"Khóa học 7",
        thoiGian:"1000",
        trangThai:true,
    },
    {
        stt:8,
        maKhoaHoc:"RA08",
        tenKhoahoc:"Khóa học 8",
        thoiGian:"1000",
        trangThai:true,
    },
    {
        stt:9,
        maKhoaHoc:"RA09",
        tenKhoahoc:"Khóa học 9",
        thoiGian:"1000",
        trangThai:true,
    },
    {
        stt:10,
        maKhoaHoc:"RA010",
        tenKhoahoc:"Khóa học 10",
        thoiGian:"1000",
        trangThai:true,
    },
];
// gọi HTML element
let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("add-btn");
let closeAddBtn = document.querySelector("#add-form .close")
let addForm = document.getElementById("add-form");
let mainAddForm = document.getElementsByClassName("form");

let updateForm = document.getElementById("update-form");
let deleteForm = document.getElementById("delete-fomr");


function render(){
    tbody.innerHTML = "";
    for(let index in databaseCourse){
        let trangThai = "";
        if(databaseCourse[index].trangThai === true){
            trangThai = `Hoạt động
                        `;
        }else{
            trangThai = `Không hoạt động &emsp;
                        `;
        };
        let tr = `<tr> 
                    <td>${+index +1}</td>
                    <td>${databaseCourse[index].maKhoaHoc}</td>
                    <td>${databaseCourse[index].tenKhoahoc}</td>
                    <td>${databaseCourse[index].thoiGian}</td>
                    <td>${trangThai}</td> 
                    <td>Sửa</td>
                    <td>Xóa</td>
                  </tr>`;
        tbody.innerHTML= tbody.innerHTML + tr;          
    }
}
render();


// mở và đóng form thêm mới
addBtn.onclick = function(){
    addForm.classList.remove("add-form")
}
closeAddBtn.onclick = function(){
    addForm.classList.add("add-form")
}
//lấy trạng thái người dung
function userStatus(){
    let status = document.querySelector(`input[name="status"]:checked`)
    if(status.id === "active"){
        return true;
    }else{
        return false;
    };
}
// sự kiện thêm mới nhân viên
mainAddForm.onsubmit = function(event){
    console.log("hello world");
    
    event.preventDefault();
    let statusUser = userStatus();
    let course = {
        stt: Math.random(),
        maKhoaHoc: mainAddForm.maKhoaHoc.value,
        tenKhoaHoc: mainAddForm.tenKhoahoc.value,
        thoiGian: mainAddForm.thoiGian.value,
        trangThai: statusUser,
    };
    databaseCourse.push(course);   
    render(databaseCourse);
    
};


// tìm kiếm dữ liệu khóa học
let searchInput = document.getElementById("search-Input");
let searchButton = document.getElementById("search-Button");

searchButton.addEventListener("click", function(){
    let question = searchInput.value;
    let result = [];
    for( let i = 0; i < databaseCourse.length; i++){
        if(
            databaseCourse[i].maKhoaHoc.indexOf(question) !== -1 ||
            databaseCourse[i].tenKhoahoc.indexOf(question) !== -1
        ){
            result.push(databaseCourse[i]);
        }
    }
    render(result);
});

// Sắp xếp dữ liệu khóa học
let sortByName = document.getElementById("sortByName");
// gắn sự kiện
sortByName.addEventListener("change",function(){
    let sortValue = sortByName.value;
    if(sortValue === "2"){
    // tăng dần
      databaseCourse.sort((a, b) =>{
        let numberA = parseInt(a.tenKhoahoc.substring(9));
        let numberB = parseInt(b.tenKhoahoc.substring(9));
        return numberB - numberA;
      });
    }else if(sortValue === "1"){
    // giảm dần
      databaseCourse.sort((a, b) => {
        let numberA = parseInt(a.tenKhoahoc.substring(9));
        let numberB = parseInt(b.tenKhoahoc.substring(9));
        return numberA - numberB;
    });
    }
    render(databaseCourse);
});









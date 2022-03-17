
// // câu1
// function ptbn(){
//     let a = 5;
//     let b = 8;
//     let c = a/b
//     document.writeln( 'nghiệm của ptbn là:'+c)
// }
// ptbn();

// cau 2;
// let a = [1,2,3,4,5,6,7];
// let b = prompt('so phan tu can tim la');
//
// function timpt(){
//     for (let i = 0; i < a.length; ++i){
//         b = a[i]
//         if (b=a[i]){
//             document.writeln('số vừa nhập có trong mảng'+b)
//             break
//         }else {
//             document.writeln('số vừa nhập không có trong mảng')
//         }
//
//     }
//     console.log(b)
// }
//
// timpt();

//cau3 Viết chương trình nhập vào một chuỗi bất kỳ. Gọi hàm tìm số ký tự nguyên
// âm vừa xây dựng ở trên

// let nhap =prompt("Nhap một chuỗi bất kỳ")
// let result = document.getElementById("rs")
// let arr = nhap.split("")
// function timgnuyenam() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "a" || arr[i] === "o" || arr[i] === "e" || arr[i] === "u" || arr[i] === "i") {
//             result.innerHTML = "co so nguyem am trong chuoi"
//             return
//
//         } else result.innerHTML = "false"
//
//     }
// }
// timgnuyenam(arr);

//cau 4

class Animal {
    constructor(name,weight) {
        this.name = name
        this.weight = weight
    }
    setName(name){
        this.name = name
    }
    setWeight(weight){
        this.weight = weight
    }
    getName(){
        return this.name
    }
    getWeight(){
        return this.weight
    }
    toString(){
        alert(this.name +' '+ this.weight)

    }
}
let Animal1 = new Animal('Elephant', 45.6)
 Animal1.toString()
let Animal2 = new Animal('dog',30)
Animal2.toString();

Animal2.setName('mouse')
Animal2.toString();

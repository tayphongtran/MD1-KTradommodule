// câu1
// let a = +prompt('nhập hệ số a vào')
// let b = +prompt('nhập hệ số b vào')
//
// function ptbn() {
//     let c = -b/ a
//     if (a==0&& b!=0){
//         alert('pt vô nghiệm')
//
//     }
//     if (a==0&& b==0){
//         alert('pt vô số nghiệm')
//     }
//     return document.writeln('nghiệm ptbn = ' + c)
// }
//
// ptbn(a, b);

// cau 2;

//
// function indexoff(){
//     let count = 0
//     for (let i = 0; count < arr.length; i++) {
//         if (b == arr[i]){
//             document.writeln('giá trị phần tử' + b)
//             document.writeln('vi tri' + arr.indexOf(b))
//             count++
//             break
//         }
//     }
// }
// indexoff(arr,b);

// let arr = [11, 2, 23, 4, -5, 6, 7, 15];
// let b = +prompt('so phan tu can tim la nếu đúng thì in ra còn sai thì  in ra -1: ');
//
//
// function indexoff() {
//     let count = 0
//     for (let i = 0; count < arr.length; i +=1) {
//         count += arr[i]
//         if (count) {
//             document.writeln('vi tri =' + arr.indexOf(b) + ' ' +'giá trị'+  ' '+ b)
//             break
//         }
//     }
// }
// indexoff(b,arr)

// cau3 Viết chương trình nhập vào một chuỗi bất kỳ. Gọi hàm tìm số ký tự nguyên
// âm vừa xây dựng ở trên

// let nhap =prompt("Nhap một chuỗi bất kỳ")
// let arr = nhap.split('')
// function timgnuyenam() {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "a" || arr[i] == "o" || arr[i] ==  "e" || arr[i] ==  "u" || arr[i] =="i") {
//             count++
//             document.writeln('na o vị trí = ' + count)
//         }else {
//             count++
//             alert('phu am ')
//         }
//     }
// }
// timgnuyenam(arr);

//cau 4

// class Animal {
//     constructor(name,weight) {
//         this.name = name
//         this.weight = weight
//     }
//     setName(name){
//         this.name = name
//     }
//     setWeight(weight){
//         this.weight = weight
//     }
//     getName(){
//         return this.name
//     }
//     getWeight(){
//         return this.weight
//     }
//     toString(){
//         alert(this.name +' '+ this.weight)
//
//     }
// }
// let Animal1 = new Animal('Elephant', 45.6)
//  Animal1.toString()
// let Animal2 = new Animal('dog',30)
// Animal2.toString();
//
// Animal2.setName('mouse')
// Animal2.toString();

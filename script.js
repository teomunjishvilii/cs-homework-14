// Task 1

// დაწერეთ შემდეგი სკრიპტი:
// მოცემულია ცვლადი, რომლის მნიშვნელობაა 100.
// დაწერეთ if პირობა, თუ ცვლადის მნიშვნელობა ნაკლებია 50ზე დაუბეჭდოს - ნაკლებია 50ზე,
// თუ ცვლადის მნიშვნელობა მეტია 20ზე დაიბეჭდოს მეტია 20ზე,
// ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - შეცდომა.

let num = 100;
// არ ვიყენებ {}-ს რადგან გვაქვს მხოლოდ ერთხაზიანი კოდები
if (num < 50) console.log("ნაკლებია 50-ზე");
else if (num > 20) console.log("მეტია 20-ზე");
else console.log("შეცდომა");

// Task 2

// მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ.
// ახალი if ის სინტაქსით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,
// ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false;

let firstname = "მარიამ";
let result = firstname == "მარიამ" ? "true" : "false";
console.log(result);

// Task 3

// მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ.
// switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,
// ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false;

let firstname1 = "მარიამ";
switch (firstname1) {
  case "მარიამ":
    console.log("true");
    break;

  default:
    console.log("false");
    break;
}

// Task 4

// ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (i = 5; i <= 100; i++) {
  console.log(i);
}

// Task 5

// მოცემულია მასივი:
// let array1= [1, 2, 4, -. 1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -8, 1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
  }
}

// Task 6

// მოცემულია ობიექტი
// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;

let user2 = {
  name: "anna",
  age: 20,
  studentStatus: "active",
};

// 1st Method
if (user2.age < 18 && user2.studentStatus == "active") {
  console.log("hello user");
} else if (user2.name == "ლევან") {
  console.log("hello levani");
} else if (user2.studentStatus == "active" || ser2.age < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}

// 2nd Method - Ternary Operator
let conditionResult =
  user2.age < 18 && user2.studentStatus
    ? "hello user"
    : user2.name == "ლევან"
    ? "hello levani"
    : user2.studentStatus == "active" || ser2.age < 25
    ? "hello anna"
    : "error";

console.log(conditionResult);

// Task 7

// მოცემულია მასივი:
// let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// ამოიღეთ მხოლოდ ლუწი რიცხვები

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 == 0) {
    console.log(array6[i]);
  }
}

// Task 8

//  მოცემულია მასივი
// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
  {
    username: "giorgi",
    status: false,
  },

  {
    username: "levani",
    status: false,
  },

  {
    username: "anna",
    status: true,
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].status == true) {
    console.log(users[i]);
  }
}

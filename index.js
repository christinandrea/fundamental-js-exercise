import { fullName, age, sex, avatar} from "./person.js";


// 1. import Person.js
// 2. Definisikan ketiga object person tersebut dengan ketentuan seperti diatas
const charles = {
    fullName: fullName("Charles"),
    age: age(30),
    sex: sex(true),
    avatar: avatar("https://picsum.photos/seed/picsum/200"),
  };
  
  const jane = {
    fullName: fullName("Jane"),
    age: age(20),
    sex: sex(false),
    avatar: avatar("https://picsum.photos/200"),
  };
  
  const mary = {
    fullName: fullName("Mary"),
    age: age(23),
    sex: sex(false),
    avatar: avatar("https://picsum.photos/200?grayscale"),
  };


// 3. Tambah usia Jane 15 tahun
jane.age += 15;

// 4. Set usia Charles menjadi 80 tahun
charles.age = 80;
// 5. Tampilkan Informasi charles dengan querySelector
const charlesImg = document.querySelector("#charles .img");
const charlesInfo = document.querySelector("#charles .info");
// a. Set avatar charles pada selector image
charlesImg.src = charles.avatar;

// b. Tampilkan info dengan Template literals
charlesInfo.innerHTML = `
<p>Name: ${charles.fullName}</p>
<p>Age: ${charles.age}</p>
<p>Sex: ${charles.sex ? 'Male' : 'Female'}</p>
`;
// 6. Sama seperti Charles, tampilkan Informasi mary dan Jane dengan querySelector

const charlesJob = { job: "Programmer" };
const maryJob = { job: "Designer" };
const janeJob = { job: "Architect" };

const janeImg = document.querySelector("#jane .img");
const janeInfo = document.querySelector("#jane .info");

const maryImg = document.querySelector("#mary .img");
const maryInfo = document.querySelector("#mary .info");

janeImg.src = jane.avatar;
maryImg.src = mary.avatar;
// 7. Gabungkan objek charles dengan spread operator
const charlesJobInfo = { ...charles, ...charlesJob };

// 8. Definisikan fullName dan job milik Charles dengan object destructuring
const {fullName: charlesFullName, job: charlesJobTitle} = charlesJobInfo;

// a. Tampilkan job info milik charles dengan query selector
const charlesJobInfoSelector = document.querySelector("#charles .jobInfo");
// b. Tampilkan info dengan Template literals
charlesJobInfoSelector.innerHTML = `
<p>Name: ${charlesFullName}</p>
<p>Job: ${charlesJobTitle}</p>
`;




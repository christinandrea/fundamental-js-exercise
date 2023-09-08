// 1. set default value = fullName = "unknown", age = 25, isMale = false,
const Person = (fullName, age, isMale = false, avatar) => {
  var sex = $((isMale = true)) ? "Laki-laki" : "Perempuan";
  // ternary operator, menggantikan if-else
  const info = () => {
    return `Full Name: ${fullName}, Sex: ${sex}, Age: ${age}`;
    // 2. tampilkan full name, sex dan age
  };
  return {
    get getInfo() {
      return info();
      // 3. kembalikan nilai info diatas
    },
    toString() {
      return info();
      // 4. kembalikan nilai info diatas
    },
    addAge: (years) => {
      age = age + years;
    },
    // 5. kembalikan usia sekarang ditambah dengan tahun inputan user,
    setAge: (newAge) => {
      age = newAge;
    }, // 6. fungsi yang mengeset usia yang baru,
    rename: (newName) => {
      fullName = newName;
    },
    
    fullName,
    age,
    isMale,
    avatar,
    // 7. fungsi yang mengeset nama yang baru,
    // 8. kembalikan semua nilai dengan shorthand property
  };
};

export const fullName = (initialName) => {
  let _fullName = initialName
  return _fullName;
};

export const age = (initialAge) => {
  let _age = initialAge;

  return _age;
};


export const sex = (initialSex) => {
  let _sex = initialSex;

  return _sex;
};

export const avatar = (initialAvatar) => {
  let _avatar = initialAvatar;

  return _avatar;
};

const fs = require('fs');
const crypto = require('crypto');

//Шифрування даних в файлі
function EncryptingData(File, key) 
{
    const file = fs.readFileSync(File, "utf8");

    const shipher = crypto.createCipher("aes-256-cbc", key);

    let encrypted = shipher.update(file, "utf8", "hex");
    encrypted += shipher.final("hex");

    fs.writeFileSync(File, encrypted, "utf8");

    console.log(`Data in ${File} is encrypt`)
}


// Дешифрування даних в файлі
function DecryptingData(File, key) 
{
    const file = fs.readFileSync(File, "utf8");

    const deshipher = crypto.createDecipher("aes-256-cbc", key);

    let decrypted = deshipher.update(file, "hex", "utf8");

    decrypted += deshipher.final("utf8");
    fs.writeFileSync(File, decrypted, "utf8");

    console.log(`Data in  ${File} is dencrypt`)
}


//Шифрування файлу і зберігання в розширення ".enc"
function EncryptingFile(File, key) 
{
    const content = fs.readFileSync(File, "utf8");

    const shipher = crypto.createCipher("aes-256-cbc", key);

    let encrypted = shipher.update(content, "utf8", "hex");
    encrypted += shipher.final("hex");

    const NewFile = `text.enc`;
    fs.writeFileSync(NewFile, encrypted, "utf8");

    console.log(`File ${File} is encrypt`);
}
  

//Дешифрування файлу і зберігання в розширення ".txt"
function DencryptingFile(File, key) 
{
    const content = fs.readFileSync(File, "utf8");

    const deshipher = crypto.createDecipher("aes-256-cbc", key);

    let decrypted = deshipher.update(content, "hex", "utf8");
    decrypted += deshipher.final("utf8");

    const newFile = File.replace(".enc", ".txt");
    fs.writeFileSync(newFile, decrypted, "utf8");

    console.log(`File ${File} is dencrypt`);
}



  //Ім'я файлу
  const FILE = 'text.txt'

  //Ключ
  const KEY = 'myKey'

  //Шифрування даних в файлі
  //EncryptingData(FILE,KEY);

  // Дешифрування даних в файлі
  //DecryptingData(FILE,KEY);

  //Шифрування файлу
  //EncryptingFile(FILE,KEY);
  
  //Дешифрування файлу
  //DencryptingFile('text.enc',KEY);
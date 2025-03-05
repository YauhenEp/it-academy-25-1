const fse = require('fs-extra');

const dir = './folder1'
const file = './folder1/file1.txt';
const dir2 = './folder2'
const dir3 = './folder3'
fse.ensureDir(dir, () => {
  fse.ensureFile(file, () => {
    fse.ensureDir(dir2, () => {
      fse.move('./folder1/file1.txt', './folder2/file1.txt', () => {
        fse.ensureDir(dir3, () => {
          fse.copy('./folder2/file1.txt', './folder3/file1.txt', () => {
            fse.remove('./folder1')
            fse.remove('./folder2')
            fse.remove('./folder3')
          })
        })
      })
    })
  });
});

fse.ensureDir(dir)
  .then(() => fse.ensureFile(file))
  .then(function () {
    return fse.ensureDir(dir2)
  })
  .then(() => fse.move('./folder1/file1.txt', './folder2/file1.txt'))
  .then(() => fse.ensureDir(dir3))
  .then(() => fse.copy('./folder2/file1.txt', './folder3/file1.txt'))
  .then(() => {
    fse.remove('./folder1')
    fse.remove('./folder2')
    fse.remove('./folder3')
  })

async function createFolders(){
  await fse.ensureDir(dir);
  await fse.ensureFile(file);
  await fse.ensureDir(dir2);
  await fse.move('./folder1/file1.txt', './folder2/file1.txt');
  await fse.ensureDir(dir3);
  await fse.copy('./folder2/file1.txt', './folder3/file1.txt');
  await fse.remove('./folder1');
  await fse.remove('./folder2');
  await fse.remove('./folder3');
}

createFolders()







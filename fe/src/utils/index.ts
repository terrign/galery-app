const changeFileName = (file: File, name: string) => {
  const fileExtension = file.name.split('.').pop();
  const newFileName = `${name}.${fileExtension}`;
  return new File([file], newFileName, { type: file.type });
};

const toDataURI = (file: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      resolve('');
    }
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
  });
};

export { changeFileName, toDataURI };

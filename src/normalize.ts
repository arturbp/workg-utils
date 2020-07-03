export function onlyNumbers(value: string) {
  return value.replace(/\D/g, '');
};

export function onlyLetters(value: string) {
  if (!value) return value;
  if (!value.match(/^[A-Za-z]+$/)) {
    value = value.substring(0, value.length - 1);
  };
  return value;
};

export const phoneMask = (value: string) => {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, '');

  //Máscara para número comercial
  if (onlyNums.substring(0, 1) === '0') {
      if (onlyNums.length <= 4) {
          return onlyNums;
      };
      if (onlyNums.length === 4) {
          return onlyNums + '-';
      };
      if (onlyNums.length > 4 && onlyNums.length <= 7) {
          return onlyNums.substring(0, 4) + '-' + onlyNums.substring(4, 7);
      };
      if (onlyNums.length > 7) {
          return onlyNums.substring(0, 4) + '-' + onlyNums.substring(4, 7) + '-' + onlyNums.substring(7, 11);
      };
  };

  //Máscara para Celular
  if (onlyNums.substring(2, 3) === '9') {
      if (onlyNums.length > 1 && onlyNums.length <= 2) {
          return '(' + onlyNums;
      };
      if (onlyNums.length > 1 && onlyNums.length <= 3) {
          return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 3);
      };
      if (onlyNums.length > 3 && onlyNums.length <= 7) {
          return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 3) + ' ' + onlyNums.substring(3, 7);
      };
      if (onlyNums.length > 7) {
          return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 3) + ' ' + onlyNums.substring(3, 7) + '-' + onlyNums.substring(7, 11);
      };

      return onlyNums;
  };
  //Máscara para Telefone fixo
  if (onlyNums.length >= 1 && onlyNums.length <= 2) {
      return '(' + onlyNums;
  };
  if (onlyNums.length > 1 && onlyNums.length <= 3) {
      return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 3);
  };
  if (onlyNums.length > 3 && onlyNums.length <= 6) {
      return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 6);
  };
  if (onlyNums.length > 6) {
      return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 6) + '-' + onlyNums.substring(6, 10);
  };

  return onlyNums;
}

export function cepMask(value: string) {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length > 2 && onlyNums.length <= 5) {
      return onlyNums.substring(0, 2) + '.' + onlyNums.substring(2, 5);
  };
  if (onlyNums.length > 5) {
      return onlyNums.substring(0, 2) + '.' + onlyNums.substring(2, 5) + '-' + onlyNums.substring(5, 8);
  };

  return onlyNums;
}

export function cnpjMask(value: string) {
  if (!value) return value;

  value = value.replace(/[^\d]/g, '');

  if (value.length >= 3 && value.length < 6) {
      return value.substring(0, 2) + '.' + value.substring(2, 5);
  };
  if (value.length >= 6 && value.length < 9) {
      return value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5, 8);
  };
  if (value.length >= 9 && value.length < 13) {
      return value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5, 8) + '/' + value.substring(8, 12);
  };
  if (value.length >= 13 && value.length < 15) {
      return value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5, 8) + '/' + value.substring(8, 12) + '-' + value.substring(12, 15);
  };

  return value;
}

export function cpfMask(value: string) {
  value = value.replace(/[^\d]/g, '');

  if (!value) return value;
  
  if (value.length >= 4 && value.length < 7) {
      return value.substring(0, 3) + '.' + value.substring(3, 6);
  };
  if (value.length >= 7 && value.length < 10) {
      return value.substring(0, 3) + '.' + value.substring(3, 6) + '.' + value.substring(6, 9);
  };
  if (value.length >= 10 && value.length < 12) {
      return value.substring(0, 3) + '.' + value.substring(3, 6) + '.' + value.substring(6, 9) + '-' + value.substring(9, 11);
  };

  return value;
}
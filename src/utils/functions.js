export const formatarMoeda = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
};

export const formatarData = (data) => {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(data));
};

export const formatarDataHora = (data) => {
  return new Intl.DateTimeFormat("pt-BR", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(data));
};

export const validarCPF = (cpf) => {
  const strCPF = String(cpf).replace(/[^\d]/g, "");

  if (strCPF.length !== 11) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(strCPF)) return false;

  let soma = 0;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(strCPF[i - 1]) * (11 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(strCPF[9])) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(strCPF[i - 1]) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(strCPF[10]);
};

export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validarData = (data) => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(data)) return false;

  const [dia, mes, ano] = data.split("/").map(Number);
  const dataObj = new Date(ano, mes - 1, dia);
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() + 1 === mes &&
    dataObj.getDate() === dia
  );
};

export const validarValidadeCartao = (data) => {
  const regex = /^\d{2}\/\d{2}$/;
  if (!regex.test(data)) return false;

  const [mes, ano] = data.split("/").map(Number);
  const dataObj = new Date(parseInt('20'+ano.toString()), mes - 1);
  return (
    dataObj.getFullYear() === parseInt('20'+ano.toString()) &&
    dataObj.getMonth() + 1 === mes
  );
};

export const validarCelular = (data) => {
  const regex = /^\d{11}$/; ///^\+\d{3}\(\d{2}\) \d{5}-\d{4}$/
  return regex.test(data);
}

String.prototype.initCap = function () {
   return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
      return m.toUpperCase();
   });
};

export const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
};
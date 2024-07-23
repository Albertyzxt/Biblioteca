// const prompt = require("prompt-sync")({ sigint: true });

// let biblioteca = [];

// const adicionarLivro = () => {
//   let nome = prompt("Nome do Livro: ");
//   let autor = prompt("Nome do Autor: ");
//   let tamanho = parseInt(prompt("Quantidade de páginas: "));
//   if (isNaN(tamanho)) {
//     console.log("Você deve digitar um número inteiro!");
//     return;
//   }
//   let genero = prompt(
//     "Gênero do livro (ação, romance, ficção, terror, outros): "
//   ).toLowerCase();
//   const generosPermitidos = ["ação", "romance", "ficção", "terror", "outros"];
//   if (!generosPermitidos.includes(genero)) {
//     console.log(
//       "Gênero inválido. Escolha entre ação, romance, ficção, terror ou outros."
//     );
//     return;
//   }
//   biblioteca.push({ nome, autor, tamanho, genero });
//   console.log("Livro adicionado com sucesso!");
// };

// const removerLivro = () => {
//   if (biblioteca.length === 0) {
//     console.log("Nenhum livro na biblioteca para remover.");
//     return;
//   }
//   console.log("Lista de Livros:");
//   listarLivros();
//   let num = prompt("Digite o número do livro que deseja remover: ");
//   const index = parseInt(num) - 1;
//   if (index < 0 || index >= biblioteca.length || isNaN(index)) {
//     console.log("Livro não encontrado.");
//     return;
//   }
//   biblioteca.splice(index, 1);
//   console.log("Livro removido com sucesso!");
// };

// const atualizarLivro = () => {
//   if (biblioteca.length === 0) {
//     console.log("Nenhum livro na biblioteca para atualizar.");
//     return;
//   }
//   console.log("Lista de Livros:");
//   listarLivros();
//   let num = prompt("Digite o número do livro que deseja atualizar: ");
//   const index = parseInt(num) - 1;
//   if (index < 0 || index >= biblioteca.length || isNaN(index)) {
//     console.log("Livro não encontrado.");
//     return;
//   }
//   let nome = prompt("Novo Nome do Livro: ");
//   let autor = prompt("Novo Nome do Autor: ");
//   let tamanho = parseInt(prompt("Nova Quantidade de páginas: "));
//   if (isNaN(tamanho)) {
//     console.log("Você deve digitar um número inteiro!");
//     return;
//   }
//   let genero = prompt(
//     "Novo Gênero do livro (ação, romance, ficção, terror, outros): "
//   ).toLowerCase();
//   const generosPermitidos = ["ação", "romance", "ficção", "terror", "outros"];
//   if (!generosPermitidos.includes(genero)) {
//     console.log(
//       "Gênero inválido. Escolha entre ação, romance, ficção, terror ou outros."
//     );
//     return;
//   }
//   biblioteca[index] = { nome, autor, tamanho, genero };
//   console.log("Livro atualizado com sucesso!");
// };

// const listarLivros = () => {
//   biblioteca.forEach((livro, index) => {
//     console.log(
//       `${index + 1}. ${livro.nome} - ${livro.autor} - ${
//         livro.tamanho
//       } páginas - ${livro.genero}`
//     );
//   });
// };

// const functions = {
//   adicionarLivro,
//   removerLivro,
//   atualizarLivro,
//   listarLivros,
// };

// module.exports = functions;
const prompt = require("prompt-sync")({ sigint: true });

let biblioteca = [];

const adicionarLivro = () => {
  let nome = prompt("Nome do Livro: ");
  let autor = prompt("Nome do Autor: ");
  let tamanho = parseInt(prompt("Quantidade de páginas: "));
  
  if (isNaN(tamanho)) {
    console.log("Você deve digitar um número inteiro!");
    return;
  }
  
  let genero = prompt(
    "Gênero do livro (ação, romance, ficção, terror, outros): "
  ).toLowerCase();
  
  const generosPermitidos = ["ação", "romance", "ficção", "terror", "outros"];
  
  if (!generosPermitidos.includes(genero)) {
    console.log(
      "Gênero inválido. Escolha entre ação, romance, ficção, terror ou outros."
    );
    return;
  }
  
  biblioteca.push({ nome, autor, tamanho, genero });
  console.log("Livro adicionado com sucesso!");
};

const removerLivro = () => {
  if (biblioteca.length === 0) {
    console.log("Nenhum livro na biblioteca para remover.");
    return;
  }
  
  console.log("Lista de Livros:");
  listarLivros();
  
  let num = prompt("Digite o número do livro que deseja remover: ");
  const index = parseInt(num) - 1;
  
  if (index < 0 || index >= biblioteca.length || isNaN(index)) {
    console.log("Livro não encontrado.");
    return;
  }
  
  biblioteca.splice(index, 1);
  console.log("Livro removido com sucesso!");
};

const atualizarLivro = () => {
  if (biblioteca.length === 0) {
    console.log("Nenhum livro na biblioteca para atualizar.");
    return;
  }
  
  console.log("Lista de Livros:");
  listarLivros();
  
  let num = prompt("Digite o número do livro que deseja atualizar: ");
  const index = parseInt(num) - 1;
  
  if (index < 0 || index >= biblioteca.length || isNaN(index)) {
    console.log("Livro não encontrado.");
    return;
  }
  
  let nome = prompt("Novo Nome do Livro: ");
  let autor = prompt("Novo Nome do Autor: ");
  let tamanho = parseInt(prompt("Nova Quantidade de páginas: "));
  
  if (isNaN(tamanho)) {
    console.log("Você deve digitar um número inteiro!");
    return;
  }
  
  let genero = prompt(
    "Novo Gênero do livro (ação, romance, ficção, terror, outros): "
  ).toLowerCase();
  
  const generosPermitidos = ["ação", "romance", "ficção", "terror", "outros"];
  
  if (!generosPermitidos.includes(genero)) {
    console.log(
      "Gênero inválido. Escolha entre ação, romance, ficção, terror ou outros."
    );
    return;
  }
  
  biblioteca[index] = { nome, autor, tamanho, genero };
  console.log("Livro atualizado com sucesso!");
};

const listarLivros = () => {
  biblioteca.forEach((livro, index) => {
    console.log(
      `${index + 1}. ${livro.nome} - ${livro.autor} - ${livro.tamanho} páginas - ${livro.genero}`
    );
  });
};

// Objeto com todas as funções disponíveis
const functions = {
  adicionarLivro,
  removerLivro,
  atualizarLivro,
  listarLivros,
};

module.exports = functions;

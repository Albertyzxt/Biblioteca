const prompt = require("prompt-sync")({ sigint: true });

const {
  adicionarLivro,
  removerLivro,
  atualizarLivro,
  listarLivros,
} = require("./funcoesBiblioteca");

const menuBiblioteca = () => {
  while (true) {
    console.log(`
    === Menu da Biblioteca ===
    1. Adicionar um novo livro
    2. Remover um livro
    3. Atualizar um livro existente
    4. Listar livros
    0. Sair
    `);

    let opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        adicionarLivro();
        break;
      case "2":
        removerLivro();
        break;
      case "3":
        atualizarLivro();
        break;
      case "4":
        listarLivros();
        break;
      case "0":
        console.log("Saindo da biblioteca, até mais!");
        return;
      default:
        console.log("Você deve selecionar um número do menu.");
        return;
    }
  }
};
menuBiblioteca();
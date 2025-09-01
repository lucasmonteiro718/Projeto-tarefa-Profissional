import 'dart:io';

void main() {
  print('=== Análise de Variação de Preços ===');

  // Pergunta quantos produtos o usuário quer analisar
  print('Quantos produtos deseja analisar? ');
  int quantidade = int.parse(stdin.readLineSync()!);

  for (int i = 1; i <= quantidade; i++) {
    print('\n--- Produto $i ---');

    // Entrada de dados
    print('Digite o nome do produto: ');
    String? produto = stdin.readLineSync();

    print('Digite o preço anterior: ');
    double precoAnterior = double.parse(stdin.readLineSync()!);

    stdout.write('Digite o preço posterior: ');
    double precoPosterior = double.parse(stdin.readLineSync()!);

    // Cálculo
    double variacao = variacaoEmPorcentagem(precoAnterior, precoPosterior);
    String situacao = definirSituacao(variacao);

    // Saída formatada
    print('\nResultado do Produto $i');
    print('Nome: $produto');
    print('Preço anterior: R\$ $precoAnterior');
    print('Preço posterior: R\$ $precoPosterior}');
    print('Variação: $variacao%');
    print('Situação: $situacao');
  }

  print('\n=== Fim da Análise ===');
}

// Função para calcular variação em porcentagem
double variacaoEmPorcentagem(double anterior, double posterior) {
  return ((posterior - anterior) / anterior) * 100;
}

// Função para definir situação
String definirSituacao(double variacao) {
  if (variacao > 0) {
    return 'AUMENTO';
  } else if (variacao == 0) {
    return 'ESTÁVEL';
  } else {
    return 'QUEDA';
  }
}
// Falta ainda uma função de erros, caso não sejam inseridos valores
// relacionados às suas varéveis (ex: inserir um número numa variavel String)
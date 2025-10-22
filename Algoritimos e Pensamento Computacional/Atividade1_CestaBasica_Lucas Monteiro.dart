void main() {
  //PROGRAMADO COM DART!!!

  // declaração das variáveis - nome dos produtos
  String produto1 = 'Melancia';
  String produto2 = 'Banana';
  String produto3 = 'Manga';

  print(
      'Os produtos escolhidos para esta análise foram: $produto1, $produto2 e $produto3!\n');

  // preços anteriores
  double precoAnterior1 = 10.5;
  double precoAnterior2 = 20.0;
  double precoAnterior3 = 8.7;

  // preços posteriores
  double precoPosterior1 = 10.0;
  double precoPosterior2 = 21.0;
  double precoPosterior3 = 8.7;

  // cálculo e exibição dos produtos
  double variacao1 = variacaoEmPorcentagem(precoAnterior1, precoPosterior1);
  String situacao1 = definirSituacao(variacao1);

  print('Nome: $produto1');
  print('Preço anterior: $precoAnterior1');
  print('Preço posterior: $precoPosterior1');
  print('Variação em %: $variacao1%');
  print('Situação: $situacao1\n');

  double variacao2 = variacaoEmPorcentagem(precoAnterior2, precoPosterior2);
  String situacao2 = definirSituacao(variacao2);

  print('Nome: $produto2');
  print('Preço anterior: $precoAnterior2');
  print('Preço posterior: $precoPosterior2');
  print('Variação em %: $variacao2%');
  print('Situação: $situacao2\n');

  double variacao3 = variacaoEmPorcentagem(precoAnterior3, precoPosterior3);
  String situacao3 = definirSituacao(variacao3);

  print('Nome: $produto3');
  print('Preço anterior: $precoAnterior3');
  print('Preço posterior: $precoPosterior3');
  print('Variação em %: $variacao3%');
  print('Situação: $situacao3\n');
}

// função para calcular variação em porcentagem
double variacaoEmPorcentagem(double anterior, double posterior) {
  return ((posterior - anterior) / anterior) * 100;
}

// função para definir situação do preço
String definirSituacao(double variacao) {
  if (variacao > 0) {
    return 'AUMENTO';
  } else if (variacao == 0) {
    return 'ESTÁVEL';
  } else {
    return 'QUEDA';
  }
}

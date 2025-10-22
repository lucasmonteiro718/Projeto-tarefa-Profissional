
#include <stdio.h>
#include <stdlib.h>

#define DIAS 7

int main() {
    int carros[DIAS];
    char *diasSemana[DIAS] = {"Domingo", "Segunda-feira", "Terça-feira", 
                              "Quarta-feira", "Quinta-feira", "Sexta-feira", 
                              "Sábado"};
    int i, maior_qtd_carros, diaPico;

    // Preencher os dados
    printf("Pedágio\n\n");
    for (i = 0; i < DIAS; i++) {
        printf("Digite a quantidade de carros em %s: ", diasSemana[i]);
        scanf("%d", &carros[i]);
    }

    // Encontrar o dia com maior numero de carros
    maior_qtd_carros = carros[0];
    diaPico = 0;
    for (i = 1; i < DIAS; i++) {
        if (carros[i] > maior_qtd_carros) {
            maior_qtd_carros = carros[i];
            diaPico = i;
        }
    }

    printf("\nIMPRESSÃO DOS DADOS\n");
    for (i = 0; i < DIAS; i++) {
        if (i == diaPico) {
            printf("%s: %d carros\n", diasSemana[i], carros[i]);
        } else {
            printf("%s: %d carros\n", diasSemana[i], carros[i]);
        }
    }

    printf("\nO dia com maior movimento foi: %s, com %d carros.\n",
           diasSemana[diaPico], maior_qtd_carros);

    return 0;
}
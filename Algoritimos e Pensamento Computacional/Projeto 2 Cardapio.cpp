#include <stdio.h>

int main() {
    
//Início do programa

    // Preços fixos
    float preco_prato = 25.0;
    float preco_bebida = 8.0;
    float preco_sobremesa = 12.0;

    printf("Bem-vindo ao Cardapio Digital!\n");
    printf("Monte o seu pedido.\n");
    printf("----------------------------------\n");

    int opcao; 
    int qtd;
    float total = 0.0;

    do {
        printf("\nEscolha uma oção:\n");
        printf("1 - Prato Feito (R$ %.2f)\n", preco_prato);
        printf("2 - Bebida (R$ %.2f)\n", preco_bebida);
        printf("3 - Sobremesa (R$ %.2f)\n", preco_sobremesa);
        printf("4 - Finalizar Pedido?\n");
        printf("Escolha uma opcao: ");
        

    //Caso a opção não seja entre 1 e 4
  int res;
  res = scanf("%d", &opcao);
    // Se não for inteiro
    if(res != 1) {
        printf("\nOpcao invalida! Tente novamente.\n");
        while(getchar() != '\n'); // limpa o buffer de entrada
        continue;
    }
    if(opcao < 1 || opcao > 4) {   
        printf("Opcao invalida! Tente novamente.\n");
        continue;
    }

        switch(opcao) {
            case 1:
                printf("Quantos pratos deseja? ");
                res = scanf("%d", &qtd);
                
                if(res != 1) { 
                    printf("Quantidade invalida!\n"); 
            
                while(getchar() != '\n'); 
            break; 
        }
            
                total += qtd * preco_prato;
                printf("Adicionado %d prato(s).\n", qtd);
                
                break;
            case 2:
                printf("Quantas bebidas deseja? ");
                res = scanf("%d", &qtd);
                
                if(res != 1) { 
                    printf("Quantidade invalida!\n"); 
            
                while(getchar() != '\n'); 
            break; 
        }
                total += qtd * preco_bebida;
                printf("Adicionado %d bebida(s).\n", qtd);
                break;
            case 3:
                printf("Quantas sobremesas deseja? ");
                res = scanf("%d", &qtd);
                
                if(res != 1) { 
                    printf("Quantidade invalida!\n"); 
            
                while(getchar() != '\n'); 
            break; 
        }
                total += qtd * preco_sobremesa;
                printf("Adicionado %d sobremesa(s).\n", qtd);
                break;
            case 4:
                printf("\n");
                break;
            default:
                printf("Opcao invalida, tente novamente.\n");
        }

    } while(opcao != 4);

    // Desconto se o valor do pedido ultrapassar R$ 50
    if(total >= 50.0) {
        printf("\nVoce ganhou 10%% de desconto!\n");
        total *= 0.9;
    }
    
    printf("Fim do pedido\n\n");
    printf("Total do pedido: R$ %.2f\n", total);
    //Adicionar uma lista do que foi pedido para mostrar
    printf("Obrigado e volte sempre!\n");
    printf("------------------------------------\n");

    return 0;
}
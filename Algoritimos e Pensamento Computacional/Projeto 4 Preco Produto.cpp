#include <stdio.h>

int main() {
    int i, j;
    float temp;
    float precos[10] = {1.99, 3.99, 5.99, 2.99, 4.99, 6.99, 7.90, 9.99, 8.99, 10.99};

    // principal
    printf("Precos originais:\n");
    for (i = 0; i < 10; i++) {
        printf("%.2f ", precos[i]);
    }
    printf("\n");

    //ordem crescente
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9 - i; j++) {
            if (precos[j] > precos[j + 1]) {
                temp = precos[j];
                precos[j] = precos[j + 1];
                precos[j + 1] = temp;
            }
        }
    }

    printf("\nCrescente:\n");
    for (i = 0; i < 10; i++) {
        printf("%.2f ", precos[i]);
    }
    printf("\n");

    //ordem decrescente
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9 - i; j++) {
            if (precos[j] < precos[j + 1]) {
                temp = precos[j];
                precos[j] = precos[j + 1];
                precos[j + 1] = temp;
            }
        }
    }

    printf("\nDecrescente:\n");
    for (i = 0; i < 10; i++) {
        printf("%.2f ", precos[i]);
    }
    printf("\n");

    return 0;
}
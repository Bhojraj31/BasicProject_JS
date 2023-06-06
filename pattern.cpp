#include <stdio.h>

void printPattern(int n) {
    for (int i = 1; i <= n; i++) {
        // Spaces before the numbers
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }

        // Increasing numbers
        for (int k = 1; k <= i; k++) {
            cout << k;
        }

        // Decreasing numbers
        for (int l = i - 1; l >= 1; l--) {
            cout << l;
        }

        cout << endl;
    }

    for (int i = n - 1; i >= 1; i--) {
        // Spaces before the numbers
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }

        // Increasing numbers
        for (int k = 1; k <= i; k++) {
            cout << k;
        }

        // Decreasing numbers
        for (int l = i - 1; l >= 1; l--) {
            cout << l;
        }

        cout << endl;
    }
}

int main() {
    int rows;
    std::cout << "Enter the number of rows in    the pattern: ";
    std::cin >> rows;

    printPattern(rows);

    return 0;
}
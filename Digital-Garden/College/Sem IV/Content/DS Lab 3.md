
**Name:** [Param Makwana](mailto:paramsinghmakwana@gmail.com)                                                                                                                                                     

**Roll No:** F004

**Batch:** F1

**Date:** 10-01-23

___

# Aim: To study Two-Dimensional array

## Problem Statement:

Implement below problem statements using C++.

1.  Write a program to find addition and subtraction of two matrices

```C++

#include <iostream>

  

using namespace std;

  

int main() {

  // Declare variables for the dimensions of the matrices

  int numRows, numCols;

  

  // Get the dimensions of the matrices from the user

  cout << "Enter the number of rows: ";

  cin >> numRows;

  cout << "Enter the number of columns: ";

  cin >> numCols;

  

  // Declare the matrices with the given dimensions

  int matrix1[numRows][numCols];

  int matrix2[numRows][numCols];

  

  // Get the values for the first matrix from the user

  cout << "Enter the values for the first matrix: " << endl;

  for (int i = 0; i < numRows; i++) {

    for (int j = 0; j < numCols; j++) {

      cout << "Enter value for row " << i+1 << ", column " << j+1 << ": ";

      cin >> matrix1[i][j];

    }

  }

  

  // Get the values for the second matrix from the user

  cout << "Enter the values for the second matrix: " << endl;

  for (int i = 0; i < numRows; i++) {

    for (int j = 0; j < numCols; j++) {

      cout << "Enter value for row " << i+1 << ", column " << j+1 << ": ";

      cin >> matrix2[i][j];

    }

  }

  

  // Ask the user whether to add or subtract the matrices

  char operation;

  cout << "Enter 'a' to add the matrices or 's' to subtract the matrices: ";

  cin >> operation;

  

  // Declare a third matrix to store the result of the operation

  int result[numRows][numCols];

  

  // Perform the chosen operation and store the result in the third matrix

  for (int i = 0; i < numRows; i++) {

    for (int j = 0; j < numCols; j++) {

      if (operation == 'a') {

        result[i][j] = matrix1[i][j] + matrix2[i][j];

      } else if (operation == 's') {

        result[i][j] = matrix1[i][j] - matrix2[i][j];

      }

    }

  }

  

  // Print the result matrix

  cout << "The result of the operation is: " << endl;

  for (int i = 0; i < numRows; i++) {

    for (int j = 0; j < numCols; j++) {

      cout << result[i][j] << " ";

    }

    cout << endl;

  }

  

  return 0;

}

```

![[matbasic.png]]

___

2.  Write a program to find multiplication of two matrices

```C++

#include <iostream>

  

using namespace std;

  

int main()

{

  // Declare variables for the dimensions of the matrices

  int numRows1, numCols1, numRows2, numCols2;

  

  // Get the dimensions of the first matrix from the user

  cout << "Enter the number of rows for the first matrix: ";

  cin >> numRows1;

  cout << "Enter the number of columns for the first matrix: ";

  cin >> numCols1;

  

  // Get the dimensions of the second matrix from the user

  cout << "Enter the number of rows for the second matrix: ";

  cin >> numRows2;

  cout << "Enter the number of columns for the second matrix: ";

  cin >> numCols2;

  

  // Make sure the matrices are compatible for multiplication

  if (numCols1 != numRows2) {

    cout << "Error: The matrices cannot be multiplied." << endl;

    return 1;

  }

  

  // Declare the matrices with the given dimensions

  int matrix1[numRows1][numCols1];

  int matrix2[numRows2][numCols2];

  

  // Get the values for the first matrix from the user

  cout << "Enter the values for the first matrix: " << endl;

  for (int i = 0; i < numRows1; i++) {

    for (int j = 0; j < numCols1; j++) {

      cout << "Enter value for row " << i+1 << ", column " << j+1 << ": ";

      cin >> matrix1[i][j];

    }

  }

  

  // Get the values for the second matrix from the user

  cout << "Enter the values for the second matrix: " << endl;

  for (int i = 0; i < numRows2; i++) {

    for (int j = 0; j < numCols2; j++) {

      cout << "Enter value for row " << i+1 << ", column " << j+1 << ": ";

      cin >> matrix2[i][j];

    }

  }

  

  // Declare a third matrix to store the result of the multiplication

  int result[numRows1][numCols2];

  

  // Initialize all elements of the result matrix to 0

  for (int i = 0; i < numRows1; i++) {

    for (int j = 0; j < numCols2; j++) {

      result[i][j] = 0;

    }

  }

  

  // Multiply the two matrices and store the result in the third matrix

  for (int i = 0; i < numRows1; i++) {

    for (int j = 0; j < numCols2; j++) {

      for (int k = 0; k < numCols1; k++) {

        result[i][j] += matrix1[i][k] * matrix2[k][j];

      }

    }

  }

  

  // Print the result matrix

    cout << "The result of multiplying the two matrices is: " << endl;

    for (int i = 0; i < numRows1; i++) {

    for (int j = 0; j < numCols2; j++) {

        cout << result[i][j] << " ";

    }

    cout << endl;

    }

  

    return 0;

  

}

```

![[matmult.png]]

___

3. Write a program to find transpose of a matrix.

```C++

#include <iostream>

  

using namespace std;

  

int main()

{

    // Declare variables for the dimensions of the matrix

    int numRows, numCols;

  

    // Get the dimensions of the matrix from the user

    cout << "Enter the number of rows: ";

    cin >> numRows;

    cout << "Enter the number of columns: ";

    cin >> numCols;

  

    // Declare the matrix with the given dimensions

    int matrix[numRows][numCols];

  

    // Get the values for the matrix from the user

    cout << "Enter the values for the matrix: " << endl;

    for (int i = 0; i < numRows; i++)

    {

        for (int j = 0; j < numCols; j++)

        {

            cout << "Enter value for row " << i + 1 << ", column " << j + 1 << ": ";

            cin >> matrix[i][j];

        }

    }

  

    // Declare a new matrix to store the transpose of the original matrix

    int transpose[numCols][numRows];

  

    // Transpose the matrix and store the result in the new matrix

    for (int i = 0; i < numRows; i++)

    {

        for (int j = 0; j < numCols; j++)

        {

            transpose[j][i] = matrix[i][j];

        }

    }

  

    // Print the transposed matrix

    cout << "The transposed matrix is: " << endl;

    for (int i = 0; i < numCols; i++)

    {

        for (int j = 0; j < numRows; j++)

        {

            cout << transpose[i][j] << " ";

        }

        cout << endl;

    }

  

    return 0;

}

```

![[mattrans.png]]

___

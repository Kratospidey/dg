
**Name:** [Param Makwana](mailto:paramsinghmakwana@gmail.com)                                                                                                                                                     

**Roll No:** F004

**Batch:** F1

**Date:** 17-01-23

___

# Aim: To study Two-Dimensional array

## Problem Statement:

Write a Menu driven Program to implement Stack ADT using array.

___

# Stack Implementation

```C++

#include <iostream>

using namespace std;

#define MAX 100

class Stack

{

public:

    int top;

    int a[MAX];

public:

    Stack()

    {

        top = -1;

    }

    bool empty()

    {

        return top < 0;

    }

    bool full()

    {

        return top == MAX - 1;

    }

    bool push(int x)

    {

        if (full())

        {

            cout << "Stack overflow!" << endl;

            return false;

        }

        else

        {

            a[++top] = x;

            return true;

        }

    }

    int pop()

    {

        if (empty())

        {

            cout << "Stack underflow!" << endl;

            return 0;

        }

        else

        {

            return a[top--];

        }

    }

    int peek()

    {

        if (empty())

        {

            cout << "Stack underflow!" << endl;

            return 0;

        }

        else

        {

            return a[top];

        }

    }

    int size()

    {

        return MAX;

    }

};

  
  

int main(){

    Stack s;

    s.push(4); // Insert 4

    s.push(5); // Inert 5

    cout<<s.pop()<<endl; // remove and return 5

    cout<<s.size()<<endl; // return and print size of the stack

    cout<<s.empty()<<endl; //return boolean which depends on if the stack is empty or no

    cout<<s.peek()<<endl; //return 4 aka the top most element but don't remove 4 from the stack

}

```

![[DSLAB4PIC1.png]]

___

# Reverse an Array using Stack

```C++

#include <iostream>

using namespace std;

#define MAX 100

class Stack

{

public:

    int top;

    char a[MAX];

  

public:

    Stack()

    {

        top = -1;

    }

    bool empty()

    {

        return top < 0;

    }

    bool full()

    {

        return top > MAX - 1;

    }

    bool push(int x)

    {

        if (full())

        {

            cout << "Stack overflow!" << endl;

            return false;

        }

        else

        {

            a[++top] = x;

            return true;

        }

    }

    int pop()

    {

        if (empty())

        {

            cout << "Stack underflow!" << endl;

            return 0;

        }

        else

        {

            return a[top--];

        }

    }

    int peek()

    {

        if (empty())

        {

            cout << "Stack underflow!" << endl;

            return 0;

        }

        else

        {

            return a[top];

        }

    }

    int size()

    {

        return MAX;

    }

};

  

int main()

{

    Stack s;

    int arr[5]; // declare array of 5 elements

    cout << "Enter array input" << endl;

    for (int i = 0; i < 5; i++)

    {

        cin >> arr[i]; // take and insert input of i element into array

    }

  

    cout << "Array in normal order:"<< endl;

    for (int i = 0; i < 5; i++)

    {

        cout << arr[i] << endl;

    }

    for (int i = 0; i < 5; i++)

    {

        s.push(arr[i]); // pushing the values in array to the stack

    }

  

    for (int i = 0; i < 5; i++)

    {

        arr[i] = s.pop(); // removing and inserting the top most elements from the stack into the array

    }

    cout << "Array in reversed order:" << endl;

    for (int i = 0; i < 5; i++)

    {

        cout << arr[i] << endl;

    }

}

```

![[DSLAB4PIC2.png]]

___

# Convert a decimal number to binary number using Stack

```C++

#include <iostream>

using namespace std;

#define MAX 100

class Stack

{

public:

    int top;

    char a[MAX];

  

public:

    Stack()

    {

        top = -1;

    }

    bool empty()

    {

        return top < 0;

    }

    bool full()

    {

        return top > MAX - 1;

    }

    bool push(int x)

    {

        if (full())

        {

            cout << "Stack overflow!" << endl;

            return false;

        }

        else

        {

            a[++top] = x;

            return true;

        }

    }

    int pop()

    {

        if (empty())

        {

            cout << "Stack underflow!" << endl;

            return 0;

        }

        else

        {

            return a[top--];

        }

    }

    int peek()

    {

        if (empty())

        {

            cout << "Stack underflow!" << endl;

            return 0;

        }

        else

        {

            return a[top];

        }

    }

    int size()

    {

        return MAX;

    }

};

  

int main()

{

    Stack a;

    int n;

    cout << "Enter base-10 number: " << endl;

    cin >> n;

    while (n > 0)

    {

        a.push(n % 2);

        n = n / 2;

    }

    while (!a.empty())

    {

        cout<<a.pop();

    }

    cout << endl;

    return 0;

}

```

![[DSLAB4PIC3.png]]

___

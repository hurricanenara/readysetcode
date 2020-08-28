#include <iostream>
#include <stdlib.h>

int main()
{

    // Live long and prosper
    srand(time(NULL));

    int computer = rand() % 3 + 1;

    int user = 0;

    std::cout << "====================\n";
    std::cout << "rock paper scissors!\n";
    std::cout << "====================\n";

    std::cout << "1) ✊\n";
    std::cout << "2) ✋\n";
    std::cout << "3) ✌️\n";

    std::cout << "shoot! ";

    std::cin >> user;

    if (user == 1)
    {
        if (computer == 1)
        {
            std::cout << "It's a tie!\n";
        }
        else if (computer == 2)
        {
            std::cout << "Computer had paper, you lose!\n";
        }
        else if (computer == 3)
        {
            std::cout << "Computer had scissors, you win!";
        }
    }
    else if (user == 2)
    {
        if (computer == 1)
        {
            std::cout << "Computer had rock, you win!\n";
        }
        else if (computer == 2)
        {
            std::cout << "It's a tie!\n";
        }
        else if (computer == 3)
        {
            std::cout << "Computer had scissors, you lose!\n";
        }
    }
    else if (user == 3)
    {
        if (computer == 1)
        {
            std::cout << "Computer had rock, you lose\n";
        }
        else if (computer == 2)
        {
            std::cout << "Comp had paper, you win!\n";
        }
        else if (computer == 3)
        {
            std::cout << "It's a tie!\n";
        }
    }
}
#include <iostream>
#include <cstdlib>

int main()
{

    std::cout << "MAGIC 8-BALL\n";

    //srand sets the seed of the random number generator
    //without srand, the answer would be the same each time
    srand(time(NULL));
    int answer = std::rand() % 10;

    std::cout << answer;
}

#include <iostream>

int main()
{

    int earthWeight;
    int planetNum;

    std::cout << "What is your earth weight?";
    std::cin >> earthWeight;

    std::cout << "Planet number?";
    std::cin >> planetNum;

    switch (planetNum)
    {
    case 3:
        std::cout << "Your weight on Mars is " << (earthWeight * 0.38) << "\n";
        break;
    case 4:
        std::cout << "Your weight on Jupiter is " << (earthWeight * 2.34) << "\n";
        break;
    case 5:
        std::cout << "Your weight on Saturn is " << (earthWeight * 1.06) << "\n";
        break;
    case 6:
        std::cout << "Your weight on Uranus is " << (earthWeight * 0.92) << "\n";
        break;
    case 7:
        std::cout << "Your weight on Neptune is " << (earthWeight * 1.19) << "\n";
        break;
    default:
        std::cout << "Please choose between 3-7\n";
    }
}
//public class Store {
//    // instance fields
//    String productType;
//    int inventoryCount;
//    double inventoryPrice;
//
//    // constructor method
//    public Store(String product, int count, double price) {
//        productType = product;
//        inventoryCount = count;
//        inventoryPrice = price;
//    }
//
//    // main method
//    public static void main(String[] args) {
//        Store lemonadeStand = new Store("lemonade", 42, .99);
//        Store cookieShop = new Store("cookies", 12, 3.75);
//
//        System.out.println("Our first shop sells " + lemonadeStand.productType + " at " + lemonadeStand.inventoryPrice + " per unit.");
//
//        System.out.println("Our second shop has " + cookieShop.inventoryCount + " units remaining.");
//    }
//}

public class Store {

    String productType;
    int inventoryCount;
    double inventoryPrice;

    // new method: constructor!
    public Store(String product, int count, int price) {
        System.out.println("I am inside the constructor method.");
        productType = product;
        inventoryCount = count;
        inventoryPrice = price;
    }

    // main method is where we create instances!
    public static void main(String[] args) {
        System.out.println("Start of the main method.");

        // create the instance below
        Store lemonadeStand = new Store();
        Store cookieShop = new Store("cookies", 12, 3.75);
        // print the instance below
//      System.out.println(lemonadeStand);
//      System.out.println(lemonadeStand.productType);
    }
}

//Running the program invokes main()
//We create an instance so we move from main() to Store()
//The code inside Store() runs
//When Store() finishes execution, we return to main()
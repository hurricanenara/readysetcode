public class Noodle {

    private double lengthInCentimeters;
    private double widthInCentimeters;
    private String shape;
    protected String ingredients;
    private String texture = "brittle";

    Noodle(double lenInCent, double wthInCent, String shp, String ingr) {

        this.lengthInCentimeters = lenInCent;
        this.widthInCentimeters = wthInCent;
        this.shape = shp;
        this.ingredients = ingr;

    }

    final public boolean isTasty() {

        return true;

    }

    public static void main(String[] args) {

        Ramen yasaiRamen = new Ramen();
        System.out.println(yasaiRamen.ingredients);
        System.out.println(yasaiRamen.isTasty());
        
        Noodle spaghetti, ramen, pho;

        spaghetti = new Spaghetti();
        ramen = new Ramen();
        pho = new Pho();

        // Add your code below:
        Noodle[] allTheNoodles = {spaghetti, ramen, pho};

        for (Noodle noodle : allTheNoodles) {
            System.out.println(noodle.getCookPrep());
        }
    }

}
from flask import Flask, render_template

app = Flask(__name__)

recipes = {1: "fried egg", 2: "buttered toast"}
descriptions = {1: 'Egg fried in butter', 2: 'Toasted bread spread with butter'}
ingredients = {1: ['1 pad of butter', '1 Egg', 'A pinch of salt'], 2: ['1 pad of salted butter', '1 slice of bread']}
instructions = {
    1: {'Step 2': 'Crack the egg into the buttered pan', 'Step 5': 'Serve egg after about a minute and a half',
        'Step 1': 'Melt butter in pan over medium-low heat', 'Step 4': 'Flip egg after about a minute and a half',
        'Step 3': 'Sprinkle the pinch of salt onto cooking egg', },
    2: {'Step 3': 'Put the pad of butter on the toasted bread',
        'Step 4': 'After a minute spread the melted butter onto the bread', 'Step 1': 'Put the bread in the toaster',
        'Step 2': 'Take the toast out of the toaster'}}


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/about')
def about():
    return render_template("about.html")


@app.route("/recipe/<int:recipe_id>")
def recipe(recipe_id):
    return render_template("recipe.html", template_recipe=recipes[recipe_id],
                           template_ingredients=ingredients[recipe_id],
                           template_instructions=instructions[recipe_id])


if __name__ == '__main__':
    app.run(debug=True)

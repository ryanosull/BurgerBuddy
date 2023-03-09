puts "destroying DB....."

Review.destroy_all
Restaurant.destroy_all
Burger.destroy_all
User.destroy_all

puts "DESTROYED"

puts "seeding USERS..."

    u1 = User.create(first_name: "Bob", last_name: "Bobson", email: "bob@example.com", password: "12345")
    u2 = User.create(first_name: "Alice", last_name: "Allison", email: "alice@example.com", password: "12345")
    u3 = User.create(first_name: "Satoshi", last_name: "Nakamoto", email: "craig@example.com", password: "12345")

puts "USERS SEEDED"

puts "seeding RESTAURANTS..."

    rt1 = Restaurant.create(name: "Burger Haus" , address: "1776 Ben Franklin Blvd.", city: "Philadelphia" , state_abbr: "PA", zip: "19050" )

    rt2 = Restaurant.create(name: "Denver Dogs and Burgers", address: "16789 Park Ave W.", city: "Denver", state_abbr: "CO", zip: "80202" )

    rt3 = Restaurant.create(name: "Vegan-Kitch" , address: "3254 S. Western Ave.", city: "Chicago" , state_abbr: "IL", zip: "60608" )

puts "RESTAURANTS SEEDED"

puts "seeding BURGERS..."

    b1 = Burger.create(bun: "sesame seed", protein: "beef", cheese: "white American", veggies: "pickles and onions", condiments: "ketchup", extras: "bacon", restaurant_id: rt1.id)

    b2 = Burger.create(bun: "pretzel", protein: "bison", cheese: "sharp cheddar", veggies: "sauteed mushrooms and onion", condiments: "garlic aioli", extras: nil, restaurant_id: rt2.id )

    b3 = Burger.create(bun: "gluten free", protein: "black bean patty", cheese: "pepper jack", veggies: "arugala and tomatoe", condiments: "siracha ketchup", extras: "half avocado on the side", restaurant_id: rt3.id )

puts "BURGERS SEEDED"



puts "seeding REVIEWS..."

    r1 = Review.create(user_id: u1.id, burger_id: b1.id, content: "Hard to beat this classic burger with bacon. Really great, love the melty white American cheese.", price: 8.99, rating: 8, image: "https://wtop.com/wp-content/uploads/2017/02/The-Standard_double-beef-patty-white-american-cheese-shaved-onion-special-sauch-1880x1251.jpg" )

    r2 = Review.create(user_id: u1.id, burger_id: b2.id, content: "Bison is seriously the best meat on a burger - it just tastes so clean.", price: 12.99, rating: 9, image: "https://preview.redd.it/0yqdsnbeqbp81.jpg?auto=webp&s=b3c67075b4bb5c9cfb8acd20627d7067f50865ba" )

    r3 = Review.create(user_id: u1.id, burger_id: b3.id, content: "Not going to beat around the bush here - I try a black bean patty every so often, but it never does the trick when I am craving a greasy burger. Overpriced, in my opinion", price: 11.25, rating: 5, image: "https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers.jpg" )

puts "REVIEWS SEEDED"


puts "🌱complete✨"
puts "destroying DB....."

User.destroy_all

puts "DESTROYED"

puts "seeding USERS"

    u1 = User.create(first_name: "Bob", last_name: "Bobson", email: "bob@example.com", password: "12345")

puts "USERS SEEDED"

puts "🌱complete✨"
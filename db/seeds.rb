# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(username: "guest", password: "password");

p1 = Photo.create(title: "dont fall", url: "https://www.w3schools.com/css/img_fjords.jpg", description: "sample description", user_id: 1)
p2 = Photo.create(title: "cute puppy", url: "https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png", description: "sample description 2", user_id: 1)

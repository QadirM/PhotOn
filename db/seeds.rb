# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(username: "guest",
  password: "password",
  cover_url: "http://res.cloudinary.com/qadir/image/upload/v1489951383/xdbugmc2gavhfb2ym0pn.jpg",
  profile_url: "http://res.cloudinary.com/qadir/image/upload/w_500,h_500,c_crop,g_face,r_max/w_200/x5a9fndr0vij1tt4lwwx.png",
  bio: "Wardell Stephen Curry II (born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Many players and analysts have called him the greatest shooter in NBA history."
  );

p1 = Photo.create(title: "dont fall", url: "https://www.w3schools.com/css/img_fjords.jpg", description: "sample description", user_id: guest.id)
p2 = Photo.create(title: "cute puppy", url: "https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png", description: "sample description 2", user_id: guest.id)

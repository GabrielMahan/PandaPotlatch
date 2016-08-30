User.destroy_all
Movie.destroy_all
Review.destroy_all
Comment.destroy_all
Vote.destroy_all

#Populate with 20 users
access_levels = ["director", "critic", "general", "troll"]
users = 20.times.map do
  User.create!(username: Faker::Internet.user_name,
               email: Faker::Internet.email,
               password: "password",
               access_level: access_levels.sample)

end

#Seed 12 panda related movies
movies = [OMDB.title('Kung Fu Panda'), OMDB.title('Kung Fu Panda 2'), OMDB.title('Kung Fu Panda 3'), OMDB.title('The Amazing Panda Adventure'), OMDB.title('Chop Kick Panda'), OMDB.title('Trail of the Panda'), OMDB.title('Pandas: The Journey Home'), OMDB.title('The Adventures of Panda Warrior'), OMDB.title('Kung Fu Panda: Secrets of the Masters'), OMDB.title('Little Big Panda'), OMDB.title('Miss Panda & Hedgehog'), OMDB.title('Red Panda Adventures') ]
directors = []
directors.push(User.where('access_level': 'director').map {|dir| dir.id})

movies.map do |movie|
  Movie.create(title: movie.title,
               description: movie.plot,
               release_date: movie.year,
               genre: movie.genre,
               rating: movie.rated,
               img_src: movie.poster,
               director_id: directors[0].sample)
end


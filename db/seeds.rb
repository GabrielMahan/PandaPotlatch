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

#Create 1 review per movie
critics = []
critics.push(User.where('access_level': 'critic').map {|critic| critic.id})

movie_ids = Movie.all.map { |movie| movie.id }

reviews = 12.times.map do
  Review.create!(title: Faker::Hipster.word,
                body: Faker::Hipster.paragraphs,
                tomato_score:"#{rand(1..100)}%",
                critic_id: critics[0].sample,
                movie_id: movie_ids.sample)
end

#Create 3 comments on each review

#Create votes

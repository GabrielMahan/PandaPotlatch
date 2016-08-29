Movie.destroy_all
5.times do
  Movie.create(title: Faker::StarWars.character )
end

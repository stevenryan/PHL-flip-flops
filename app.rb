require "sinatra"
require "sendgrid-ruby"

get "/menu" do
erb :menu
end

get "/" do
erb :homepage
end

get "/gallery" do
erb :gallery
end

get "/aboutus" do
erb :aboutus
end
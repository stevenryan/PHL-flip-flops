require "sinatra"
require "sendgrid-ruby"

get "/" do
erb :homepage
end

get "/gallery" do
erb :gallery
end

get "/aboutus" do
erb :about
end

get "/menu" do
erb :menu
end

get "/contact" do
erb :contact
end
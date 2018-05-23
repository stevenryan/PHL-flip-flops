require "sinatra"
require "sendgrid-ruby"

get "/menu" do
erb :menu
end

get "/" do
erb :homepage
end

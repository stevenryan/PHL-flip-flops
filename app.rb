require "sinatra"
require "sendgrid-ruby"

get "/menu" do
erb :menu
end

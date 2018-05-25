require "sinatra"
require "sendgrid-ruby"

get "/" do
erb :homepage
end

get "/homepage" do
erb :homepage
end

get "/gallery" do
erb :gallery
end

get "/about" do
erb :about
end

get "/menu" do
erb :menu
end

get "/contact" do
erb :contact
end

get "/sendEmail" do
  @email = params[:email]
  @subject = params[:subject]
  @content = params[:content]

  from = SendGrid::Email.new(email: @email)
  to = SendGrid::Email.new(email: 'stevenrng@gmail.com')
  subject = @subject
  content = SendGrid::Content.new(type: 'text/plain', value: @content)
  mail = SendGrid::Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)
  # puts response.status_code
  # puts response.body
  # puts response.parsed_body
  # puts response.headers
  erb :contact
end

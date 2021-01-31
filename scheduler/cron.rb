require 'rufus-scheduler'

scheduler = Rufus::Scheduler.new

scheduler.cron '* * * * *' do
    puts Time.now()
end

# cron scheduler worked in application.rb, development.rb, scheduler.rb
require 'rufus-scheduler'
require 'byebug'

# scheduler = Rufus::Scheduler.new
scheduler = Rufus::Scheduler::singleton

# scheduler.in '1s' do
#   puts 'Hello... Rufus'
# end

# scheduler.cron '* 13 * * *' do
#     puts Time.now
# end

def print_time
    scheduler = Rufus::Scheduler.new
    # create record every 5 minutes from 9:30 - 9:55)
    scheduler.cron '30-55/5 9 * * 1-5' do
        # Record data
    end
    # create record every 5 minutes from 10:00 - 15:55
    scheduler.cron '*/1 10-15 * * 1-5' do
        # Record data
    end
    # create record at 16:00
    scheduler.cron '0 16 * * 1-5' do
        # Record data
    end
end

PortfoDatum.create!({
    user_id: @current_user_id,
    date: Time.now,
    holdings_snapshot: @current_user.holdings,
    label: Time.now.strftime("%I:%M %p"),
    cash_balance: 1000000
})

print_time()

scheduler.join
  require 'rufus-scheduler'

  scheduler = Rufus::Scheduler.new

  # create record every 5 minutes from 9:30 - 9:55)
  scheduler.cron '30-55/5 14 * * 1-5' do
    User.all.each do |user|
      PortfoDatum.create!({
          user_id: user.id,
          date: Time.now,
          holdings_snapshot: user.holdings,
          label: Time.now.strftime("%I:%M %p"),
          cash_balance: user.cash_balance
        })
    end
  end
  # create record every 5 minutes from 10:00 - 15:55
  scheduler.cron '*/5 15-20 * * 1-5' do
    User.all.each do |user|
      PortfoDatum.create!({
          user_id: user.id,
          date: Time.now,
          holdings_snapshot: user.holdings,
          label: Time.now.strftime("%I:%M %p"),
          cash_balance: user.cash_balance
        })
    end
  end
  # create record at 16:00
  scheduler.cron '0 21 * * 1-5' do
    User.all.each do |user|
      PortfoDatum.create!({
          user_id: user.id,
          date: Time.now,
          holdings_snapshot: user.holdings,
          label: Time.now.strftime("%I:%M %p"),
          cash_balance: user.cash_balance
        })
    end
  end